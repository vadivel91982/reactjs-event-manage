import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { checkValidity } from '../utils/valitate'

const EventBooking = (props) => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        mobile: '',
        seat: '',
        attendee: ''
    });
    const [filtered, setFiltered] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState('');
    const [buttonDisbled, setButtonDisbled] = useState(false);
    const [attendeeNum, setAttendeeNum] = useState('');
    const { name, email, mobile, seat, attendee } = inputs;
    const { onListCategory } = props;

    const getAllCategory = async (onListCategory) => {
        await onListCategory();
    }
    const setFilter = async (props) => {
        let eventDetail = []
        const id = props.match.params.id
        eventDetail = await props.categoriesList.filter((obj) => obj.id === parseInt(id))
        await setFiltered(eventDetail[0])
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
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        if (name === 'seat') {
            setAttendeeNum(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (name && email && mobile && seat && attendee) {
            setSuccess('Tickets booked');
            setButtonDisbled(true);
            setInputs({
                name: '',
                email: '',
                mobile: '',
                seat: '',
                attendee: ''
            })
            const bookingData = {
                name,
                email,
                mobile,
                seat,
                attendee,
                eventDetail: {
                    id: props.match.params.id,
                    bookingSeats: seat,
                    remaingSeats: filtered?.seats - seat
                }
            }
            console.log(bookingData)
        }
    }

    return (
        <div className="inner-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header" style={{ textAlign: "center" }}>
                                <strong>{filtered?.name}</strong>
                            </div>
                            <div className="card-body row">
                                <div className="col-5">
                                    <img src={filtered?.image} width="250px" height="250px" />
                                </div>
                                <div className="col-6">
                                    <form name="form" onSubmit={handleSubmit}>
                                        <div className="modal-body scroller" data-height="auto">
                                            <div className="form-group">
                                                <div><label>Name</label></div>
                                                <input type="text" name="name" value={name} onChange={handleChange} className={'form-control' + (submitted && !name ? ' is-invalid text-categoryBG' : '')} style={{
                                                    borderColor: submitted && !name
                                                        ? 'red'
                                                        : '',
                                                    borderWidth: 1,
                                                }} autoComplete="off" />
                                                <div style={{
                                                    color: submitted && !name
                                                        ? 'red'
                                                        : ''
                                                }}>{submitted && !name && `Please enter your name.`}</div>
                                            </div>
                                            <div className="form-group">
                                                <div><label>Email</label></div>
                                                <input type="text" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid text-categoryBG' : '')} style={{
                                                    borderColor: submitted && !email
                                                        ? 'red'
                                                        : '',
                                                    borderWidth: 1,
                                                }} autoComplete="off" required />
                                                <div style={{
                                                    color: submitted && !email
                                                        ? 'red'
                                                        : ''
                                                }}>{submitted && !email && `Please enter your email.`}</div>
                                            </div>
                                            <div className="form-group">
                                                <div><label>Phone No</label></div>
                                                <input type="text" name="mobile" value={mobile} onChange={handleChange} className={'form-control' + (submitted && !mobile ? ' is-invalid text-categoryBG' : '')} style={{
                                                    borderColor: submitted && !mobile
                                                        ? 'red'
                                                        : '',
                                                    borderWidth: 1,
                                                }} autoComplete="off" />
                                                <div style={{
                                                    color: submitted && !mobile
                                                        ? 'red'
                                                        : ''
                                                }}>{submitted && !mobile && `Please enter your mobile no.`}</div>
                                            </div>
                                            <div className="form-group">
                                                <label className={'labelTop'}>Number of Seats</label>
                                                <select name="seat" value={seat} onChange={handleChange} className={'form-control' + (submitted && !seat ? ' text-categoryBG' : '')} style={{
                                                    borderColor: submitted && !seat
                                                        ? 'red'
                                                        : '',
                                                    borderWidth: 1,
                                                }}>
                                                    <option value="">Number of seats</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </select>
                                                <div style={{
                                                    color: submitted && !seat
                                                        ? 'red'
                                                        : ''
                                                }}>{submitted && !seat && `Please select the number of seats`}</div>
                                            </div>
                                            <div className="form-group">
                                                <div><label>Name of Attendee #{attendeeNum}</label></div>
                                                <input type="text" name="attendee" value={attendee} onChange={handleChange} className={'form-control' + (submitted && !attendee ? ' is-invalid text-categoryBG' : '')} style={{
                                                    borderColor: submitted && !attendee
                                                        ? 'red'
                                                        : '',
                                                    borderWidth: 1,
                                                }} autoComplete="off" />
                                                <div style={{
                                                    color: submitted && !attendee
                                                        ? 'red'
                                                        : ''
                                                }}>{submitted && !attendee && `Please enter the name of Attendee #${attendeeNum}.`}</div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <ul className="list-links right">
                                                <li><Link to="/">
                                                    <button type="button" className="btn btn-default btn-sm" data-dismiss="modal-flot" disabled={buttonDisbled} id="close">Cancel</button>
                                                </Link></li>
                                                <li><button className="btn btn-primary btn-sm" disabled={buttonDisbled}>Submit</button></li>
                                            </ul>
                                            {success}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventBooking);