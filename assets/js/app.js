let cart = [];
        let timerInterval;

        function addToCart(name, price) {
            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ name, price, qty: 1 });
            }
            updateCart();
            toggleCart(); // Abre o carrinho automaticamente
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartBadge = document.getElementById('cartBadge');
            const cartBody = document.getElementById('cartBody');
            const cartTotal = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');

            let totalItems = 0;
            cart.forEach(item => totalItems += item.qty);
            cartBadge.textContent = totalItems;

            if (cart.length === 0) {
                cartBody.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.</div>';
                checkoutBtn.disabled = true;
            } else {
                let total = 0;
                let html = '';
                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.qty;
                    html += `
                        <div class="cart-item">
                            <span class="cart-item-name">${item.name}</span>
                            <span class="cart-item-qty">x${item.qty}</span>
                            <span class="cart-item-price">R$ ${itemTotal.toFixed(2)}</span>
                            <button type="button" class="cart-item-remove" onclick="removeFromCart(${index}); updateCart();">×</button>
                        </div>
                    `;
                    total += itemTotal;
                });
                cartBody.innerHTML = html;
                cartTotal.textContent = `R$ ${total.toFixed(2)}`;
                checkoutBtn.disabled = false;

                updateCheckoutSummary();
            }
        }

        function updateCheckoutSummary() {
            const summaryItems = document.getElementById('summaryItems');
            const totalPrice = document.getElementById('totalPrice');

            let total = 0;
            let html = '';
            cart.forEach((item) => {
                const itemTotal = item.price * item.qty;
                html += `
                    <div class="summary-item">
                        <span class="summary-item-name">${item.name} x${item.qty}</span>
                        <span class="summary-item-price">R$ ${itemTotal.toFixed(2)}</span>
                    </div>
                `;
                total += itemTotal;
            });
            summaryItems.innerHTML = html;
            totalPrice.textContent = `R$ ${total.toFixed(2)}`;
        }

        function toggleCart() {
            document.getElementById('cartModal').classList.toggle('show');
        }

        function goToCheckout() {
            document.getElementById('cartModal').classList.remove('show');
            document.getElementById('checkoutPage').classList.add('show');
            window.scrollTo(0, 0);
        }

        function backToShop() {
            document.getElementById('checkoutPage').classList.remove('show');
        }

        function switchPayment(method, event) {
            event.preventDefault();
            const cardForm = document.getElementById('cardForm');
            const pixForm = document.getElementById('pixForm');
            const tabs = document.querySelectorAll('.payment-tab');

            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            if (method === 'card') {
                cardForm.classList.add('active');
                pixForm.classList.remove('active');
                if (timerInterval) clearInterval(timerInterval);
            } else {
                cardForm.classList.remove('active');
                pixForm.classList.add('active');
                generateQRCode();
                startTimer();
            }
        }

        function generateQRCode() {
            const qrcodeDiv = document.getElementById('qrcode');
            qrcodeDiv.innerHTML = '';
            new QRCode(qrcodeDiv, {
                text: "00020126580014br.gov.bcb.brcode0136123e4567-e12b-12d1-a456-426655440000520400005303986540510.005802BR5913FULANO DE TAL6009SAO PAULO62410503***63041D3F",
                width: 250,
                height: 250,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        }

        function selectBrand(element, brand) {
            document.querySelectorAll('.card-brand').forEach(el => el.classList.remove('selected'));
            element.classList.add('selected');
        }

        function startTimer() {
            let timeLeft = 300;
            document.getElementById('timer').textContent = '05:00';

            if (timerInterval) clearInterval(timerInterval);

            timerInterval = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                document.getElementById('timer').textContent = 
                    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById('pixForm').innerHTML = '<p style="color: #999; padding: 40px; text-align: center;">QR Code expirou. <button onclick="generateQRCode(); startTimer();" style="color: #b8860b; background: none; border: none; cursor: pointer; text-decoration: underline;">Gerar novo código</button></p>';
                }
                timeLeft--;
            }, 1000);
        }

        function copyPix() {
            const pixCode = document.getElementById('pixCode');
            pixCode.select();
            document.execCommand('copy');
            
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = 'COPIADO!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        }

        function confirmPix() {
            alert('Pagamento via PIX confirmado! Obrigado pela compra.');
            cart = [];
            updateCart();
            backToShop();
        }

        function submitCard(event) {
            event.preventDefault();
            alert('Pagamento realizado com sucesso!');
            cart = [];
            updateCart();
            backToShop();
        }

        function submitOrcamento(event) {
            event.preventDefault();
            const franquia = document.querySelector('input[name="franquia"]:checked').value;
            const franquiaMap = {
                'patio': 'Pátio Paulista',
                'eldorado': 'Shopping Eldorado',
                'madalena': 'Vila Madalena - Unidade Móvel',
                'imigrantes': 'Shopping Imigrantes'
            };
            alert(`Orçamento enviado para ${franquiaMap[franquia]}! Responderemos em breve pelo WhatsApp.`);
            closeModal('orcamento');
        }

        function toggleFaq(element) {
            element.classList.toggle('active');
        }

        function openModal(type) {
            const modalId = type === 'orcamento' ? 'orcamentoModal' : 'franquiasModal';
            document.getElementById(modalId).classList.add('show');
        }

        function closeModal(type) {
            const modalId = type === 'orcamento' ? 'orcamentoModal' : 'franquiasModal';
            document.getElementById(modalId).classList.remove('show');
        }

        window.onclick = function(event) {
            const orcamentoModal = document.getElementById('orcamentoModal');
            const franquiasModal = document.getElementById('franquiasModal');
            
            if (event.target === orcamentoModal) {
                orcamentoModal.classList.remove('show');
            }
            if (event.target === franquiasModal) {
                franquiasModal.classList.remove('show');
            }
        }