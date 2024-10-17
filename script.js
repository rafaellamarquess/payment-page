// exibi o formulário Pix
function showPixForm() {
    document.getElementById('pixForm').style.display = 'block';
    document.getElementById('cardForm').style.display = 'none';
    clearCardFields();
}

// exibi o formulário de cartão de crédito
function showCardForm() {
    document.getElementById('pixForm').style.display = 'none';
    document.getElementById('cardForm').style.display = 'block';
    clearPixFields();
}

// Atualiza o total do Pix com desconto
function updatePixTotal() {
    const amount = parseFloat(document.getElementById('pixAmount').value) || 0;
    const discountedTotal = amount - (amount * 0.1);
    document.getElementById('pixTotal').innerText = `R$ ${discountedTotal.toFixed(2)}`;
}

// Valida e confirma o pagamento Pix
function confirmPixPayment() {
    const amount = document.getElementById('pixAmount').value;
    if (amount === '') {
        alert('Por favor, preencha o campo de valor.');
    } else {
        alert('Pagamento com Pix realizado com sucesso!');
    }
}

// Valida e confirma o pagamento de Crédito
function confirmCardPayment() {
    const amount = document.getElementById('cardAmount').value;
    if (amount === '') {
        alert('Por favor, preencha o campo de valor.');
    } else {
        alert('Pagamento com Cartão de Crédito realizado com sucesso!');
    }
}

// Verifica número do cartão e exibi mensagem de erro
function checkCardNumber() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cardIcon = document.getElementById('cardIcon');
    if (cardNumber.startsWith('1234')) {
        cardIcon.innerHTML = '<img src="bandeira1.png" alt="Bandeira 1" width="30">';
    } else if (cardNumber.startsWith('4321')) {
        cardIcon.innerHTML = '<img src="bandeira2.png" alt="Bandeira 2" width="30">';
    } else {
        cardIcon.innerHTML = '<span id="errorMessage">Número de cartão inválido</span>';
    }
}

// Atualiza o total do cartão com juros, se preciso
function updateCardTotal() {
    const amount = parseFloat(document.getElementById('cardAmount').value) || 0;
    const installments = document.getElementById('installments').value;
    let total = amount;

    if (installments == 4) {
        total += amount * 0.05;
    } else if (installments == 5) {
        total += amount * 0.10;
    }

    document.getElementById('cardTotal').innerText = `R$ ${total.toFixed(2)}`;
}

// Limpa campos Pix
function clearPixFields() {
    document.getElementById('cpf').value = '';
    document.getElementById('pixAmount').value = '';
    document.getElementById('pixTotal').innerText = 'R$ 0,00';
}

// Limpa campos Crédito
function clearCardFields() {
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardHolder').value = '';
    document.getElementById('cardCVC').value = '';
    document.getElementById('cardExpiry').value = '';
    document.getElementById('cardAmount').value = '';
    document.getElementById('cardTotal').innerText = 'R$ 0,00';
    document.getElementById('cardIcon').innerHTML = '';
}
