const renderCar = (user) => {
    const brand = user.brand;
    const model = user.model;

    const tdBrand = document.createElement('td');
    const tdModel = document.createElement('td');

    tdBrand.textContent = brand;
    tdModel.textContent = model;

    const trUser = document.createElement('tr');
    trUser.append(tdBrand, tdModel);

    return trUser;
};