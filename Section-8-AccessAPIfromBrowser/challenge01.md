# Update weather endpoint to accept address

1. No address ? Send back an error message
2. Address ? send back a static JSON which returns the provided address.
 - Add address property onto JSON which returns the provided address.
3. Test /weather and /weather?address=dhaka