$(document).ready(function(){
    $('#save-newsletter-user').click(function(){
        $.ajax({
            url: 'subscription.php',
            type: 'POST',
            dataType: "json",
            data: {
                text: $('#Name').val(),
                email: $('#Email').val()
            },
            success: function(data){
                $('#newsletter-response').html('<p>'+data.response+'</p>');
            },
            error: function(data){
                $('#newsletter-response').html('<p>'+data.response+'</p>');
            }
        });
    })
});