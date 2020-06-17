$(document).ready(function () {
    
    //Validation 
    $("#sendfeedback").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        }
    });

    // when the form is submitted
    $('#sendfeedback').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact-handler.php";
            var data = $(this).serialize();
            
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                dataType: "JSON",
                data: data,
                success: function (data) {
                    // data = JSON object that contact.php returns
                    console.log("the form was sent " + data)
                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#sendfeedback').find('.messages').html(alertBox);
                        // empty the form
                        $('#sendfeedback')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});