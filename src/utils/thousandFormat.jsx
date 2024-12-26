const thousandFormat = (value) => {
    value = parseInt(value);
    if(isNaN(value)) return;
    return value.toLocaleString();
}

export default thousandFormat;