const link = `https://freddy.codesubmit.io/`

    const loginAuth = async(values={}) => {
        const result = await fetch(link + "login", {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        return data;
    }

    const refreshToken = async() => {
        const result = await fetch(link + "refresh", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + getCookie("refresh_token")
            },
        });
        const data = await result.json();
        return data;
    }

    const getDashboardData = async() => {
        const result = await fetch(link + "dashboard", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + getCookie("token")
            },
        });
        const data = await result.json();
        return data;
    }

    const getOrdersData = async(page,search) => {
        const result = await fetch(link +  `orders?page=${page}&q=${search}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + getCookie("token")
            },
        });
        const data = await result.json();
        return data;
    }