const Records = () => {

    const data = window.sessionStorage.getItem("result");
    console.log(JSON.parse(data!));

    return (
        <div>Records</div>
    )
}

export default Records