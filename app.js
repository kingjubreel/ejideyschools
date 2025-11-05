// app.js - small frontend utilities, Paystack inline demo
document.addEventListener('DOMContentLoaded', () => {
  // Load Paystack inline SDK only on fees.html when needed
  if (location.pathname.endsWith('fees.html')) {
    // dynamically load Paystack script
    const s = document.createElement('script');
    s.src = 'https://js.paystack.co/v1/inline.js';
    s.async = true;
    document.head.appendChild(s);

    const feesForm = document.getElementById('feesForm');
    if (feesForm) {
      feesForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(feesForm);
        const payload = {
          student_name: fd.get('student_name'),
          student_class: fd.get('student_class'),
          fee_type: fd.get('fee_type'),
          amount: parseInt(fd.get('amount'), 10) || 0,
          parent_email: fd.get('parent_email') || 'parent@example.com'
        };

        // Replace with your Paystack public key
        const PAYSTACK_PUBLIC_KEY = 'PAYSTACK_PUBLIC_KEY';

        if (!PAYSTACK_PUBLIC_KEY || PAYSTACK_PUBLIC_KEY === 'PAYSTACK_PUBLIC_KEY') {
          alert('Demo: Replace PAYSTACK_PUBLIC_KEY in app.js with your Paystack public key OR hook the form to your backend.');
          return;
        }

        // Initialize Paystack inline payment
        const handler = window.PaystackPop.setup({
          key: PAYSTACK_PUBLIC_KEY,
          email: payload.parent_email,
          amount: payload.amount * 100,
          currency: 'NGN',
          metadata: {
            custom_fields: [
              { display_name: "Student Name", variable_name: "student_name", value: payload.student_name },
              { display_name: "Class", variable_name: "student_class", value: payload.student_class },
              { display_name: "Fee Type", variable_name: "fee_type", value: payload.fee_type }
            ]
          },
          callback: function(response){
            // response.reference -> verify on server ideally
            // Redirect to payment-success demo page
            window.location.href = 'payment-success.html';
          },
          onClose: function(){
            alert('Payment window closed.');
          }
        });
        handler.openIframe();
      });
    }
  }
});
