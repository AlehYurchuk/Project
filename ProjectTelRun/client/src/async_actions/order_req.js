export const getOrder = (requestData) => {
    return fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.status)
}