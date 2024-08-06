// require("dotenv").config();
// import {TOKEN} from './env.js'

document.addEventListener('DOMContentLoaded', () => {
    try {
        document.getElementById('carForm').addEventListener('submit', sendCarForm);
    }
    catch(err) {
        console.log(err)
    }
    document.getElementById('contactForm').addEventListener('submit', sendContactForm);
    const result = document.querySelectorAll('.form-car__form-result')
    


    
    async function sendCarForm(event) {
        event.preventDefault();
    
        const phone = document.getElementById('phone_form').value;
        const name = document.getElementById('name_form').value;
        const car = document.getElementById('car_form').value;
        const mileage = document.getElementById('mileage_form').value;
    
        if (!phone || !car) {
            alert('Пожалуйста, заполните все поля формы.');
            return; 
        }
    
        const message = `Сайт - автовыкупкиров.рф\n\nЗаявка на выкуп авто\n\nТелефон: ${phone}\nИмя: ${name}\nМашина: ${car}\nЦена: ${mileage}`;
    
        await sendTelegramMessage(message);
        document.getElementById('carForm').reset();
    }
    
    async function sendContactForm(event) {
        event.preventDefault();
    
        const phone = document.getElementById('phone').value;
        const name = document.getElementById('name').value;
    
    
        const message = `Сайт - автовыкупкиров.рф\n\nЗаявка на обратный звонок\n\nТелефон: ${phone}\nИмя: ${name}`;
    
        await sendTelegramMessage(message);
        document.getElementById('contactForm').reset();
    }
    
    async function sendTelegramMessage(message) {
        try {
            const response = await fetch('http://localhost:3000/api/sendForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
    
            if (response.ok) {
                result.forEach(el => el.innerHTML = "заявка отправлена")
            } else {
                alert('Ошибка при отправке заявки');
                console.error('Response status:', response.status);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Ошибка при отправке заявки');
        }
    }
    
})
