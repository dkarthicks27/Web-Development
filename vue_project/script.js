var obj = {
    message: 'Hello'
}


var vm = new Vue({
    el: '#example',
    data: obj,
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
  })

