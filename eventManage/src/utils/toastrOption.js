const toastrOptions = {
    timeOut: 3000,
    onShowComplete: () => console.log('SHOW: animation is done'),
    onHideComplete: () => console.log('HIDE: animation is done'),
    onCloseButtonClick: () => console.log('Close button was clicked'),
    onToastrClick: () => console.log('Toastr was clicked'),
    showCloseButton: true, // false by default
    closeOnToastrClick: true, // false by default, this will close the toastr when user clicks on it
}

export default toastrOptions;