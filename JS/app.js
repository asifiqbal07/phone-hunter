const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // Display 20 Phones Only //
    phones = phones.slice(0, 20);

    // Display No Phone Found //
    const noPhone = document.getElementById('no-phone-found');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }

    // Stop Loader //
    toogleSpinner(false);

    // Display All Phones //
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content.</p>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneDiv);

    });
}



document.getElementById('btn-search').addEventListener('click', function () {
    // Start Loader //
    toogleSpinner(true);
    const searchField = document.getElementById('exampleFormControlInput1');
    const searchText = searchField.value;
    loadPhone(searchText);
    searchField.value = '';
})

const toogleSpinner = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('d-none');
    }
    else {
        loader.classList.add('d-none');
    }

}

// loadPhone();