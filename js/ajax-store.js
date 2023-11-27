const getTools = () => {
    const url = "./data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error)
        })
};
const renderTool = ({title, quantity, price, categories}) => {
    const toolTable = document.createElement('tr');
    toolTable.innerHTML = `
                        <td>${title}</td>                      
                        <td>${quantity}</td>                      
                        <td>${price}</td>                      
                        <td>${categories}</td>                      
    `;
    return toolTable;
}
const updateTools = (tools) => {
    const toolContainer = document.querySelector('#insertProducts');
    toolContainer.innerHTML = '';
    const toolFragment = document.createDocumentFragment();
    for (let tool of tools) {
        console.log(tool);
        const tableItems = renderTool(tool);
        toolFragment.appendChild(tableItems);
    }
    toolContainer.appendChild(toolFragment);
}
//MAIN
(async ()=> {
const tools = await getTools();
updateTools(tools);
})();