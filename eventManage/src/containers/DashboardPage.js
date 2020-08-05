import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import Spinner from '../components/UI/Spinner/Spinner';

const DashboardPage = (props) => {
    const [loadingList, setLoadingList] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const { onListCategory } = props;

    const getAllCategory = async (onListCategory) => {
        await onListCategory();
        setLoadingList(true);
    }
    const setFilter = (props) => {
        setFiltered(props.categoriesList)
    }

    useEffect(() => {
        setFilter(props);
    }, [props])

    useEffect(() => {
        getAllCategory(onListCategory);

        return () => {

        };
    }, [onListCategory]);

    const handleChange = (e) => {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = props.categoriesList;
            newList = currentList.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = props.categoriesList;
        }
        setFiltered(newList);
    }

    let list = <Spinner />
    if (!props.loading && loadingList) {
        list = filtered.map((item) => {
            return <div key={item.id} className="col-md-3">
                <div className="card">
                    <div className="card-header" style={{ textAlign: "center" }}>
                        <strong>{item.name}</strong>
                    </div>
                    <div className="card-body row">
                        <div className="col-5">
                            <img src={item.image} alt={item.name} width="100px" height="100px" />
                        </div>
                        <div className="col-7" style={{ marginTop: 0 }}>
                            <h5 className="card-title">{item.date}</h5>
                            <h5 className="card-title">Seats Available: {item.seats}</h5>

                            <Link to={{ pathname: `/booking/${item.id}` }} >
                                <button className=" btn btn-primary" disabled={!item.book}>   {item.book ? 'BOOK NOW' : 'SOLD OUT'}
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="inner-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{ textAlign: "center", marginBottom: 25 }}>
                        <input type="text" placeholder="SEARCH EVENTS" name="search" className="w-50" onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    {list}
                </div>
            </div >
        </div >
    )
}

const mapStateToProps = state => {
    return {
        categoriesList: state.category.categoryList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListCategory: () => dispatch(actions.categoryList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);