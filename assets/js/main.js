jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "mchairul");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "mchairul", selector: "#ghfeed" });


});

const sendMsg = () => {
    let name = $('#name').val();
    let contact = $('#contact').val();
    let req = $('#req').val();

    if(name == '' || contact == '' || req == '') {
        alert('please complete all inputs!');
    } else {
        $("#btnSubmit").hide();
        $("#btnLoader").show();
        $.ajax({
            type: "GET",
            url: "https://gadaibpkbmobil.my.id/tele/send_notif_irul.php",
            crossDomain: true,
            data: 'sender=' + name + '&contact=' + contact + '&req=' + req,
            success: function (data) {
                alert('thank you, i will contact you as soon as possible');
                $('#hireMe').hide();
                $('#modalHire').modal('hide')
            },
            error: function (err) {
                alert('something went wrong, please try again!');
                $("#btnSubmit").show();
                $("#btnLoader").hide();
            }
        });
    }
}