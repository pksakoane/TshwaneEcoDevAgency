$(document).ready(function () {

  $("[rel='tooltip']").tooltip();
  $('.thumbnail').hover(
    function () {
      $(this).find('.caption').slideDown(250); //.fadeIn(250)
    },
    function () {
      $(this).find('.caption').slideUp(250); //.fadeOut(205)
    }
  );

  //treeview
  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }

  var paginationHandler = function () {
    // store pagination container so we only select it once
    var $paginationContainer = $(".pagination-container"),
      $pagination = $paginationContainer.find('.pagination ul');
    // click event
    $pagination.find("li a").on('click.pageChange', function (e) {
      e.preventDefault();
      // get parent li's data-page attribute and current page
      var parentLiPage = $(this).parent('li').data("page"),
        currentPage = parseInt($(".pagination-container div[data-page]:visible").data('page')),
        numPages = $paginationContainer.find("div[data-page]").length;
      // make sure they aren't clicking the current page
      if (parseInt(parentLiPage) !== parseInt(currentPage)) {
        // hide the current page
        $paginationContainer.find("div[data-page]:visible").hide();
        if (parentLiPage === '+') {
          // next page
          $paginationContainer.find("div[data-page=" + (currentPage + 1 > numPages ? numPages : currentPage + 1) + "]").show();
        } else if (parentLiPage === '-') {
          // previous page
          $paginationContainer.find("div[data-page=" + (currentPage - 1 < 1 ? 1 : currentPage - 1) + "]").show();
        } else {
          // specific page
          $paginationContainer.find("div[data-page=" + parseInt(parentLiPage) + "]").show();
        }
      }
    });
  };
  $(document).ready(paginationHandler);

  //Searchable table
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

    $.extend($.expr[':'], {
      'containsi': function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });

    $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr('visible', 'false');
    });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr('visible', 'true');
    });

    var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

    if (jobCount == '0') {
      $('.no-result').show();
    } else {
      $('.no-result').hide();
    }
  });

  // Google Translator
  $('#google_translate_element').on("click", function () {

    // Change font family and color
    $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
      .css({
        'color': '#544F4B',
        'font-family': 'Calibri',
        'width': '100%'
      });
    // Change menu's padding
    $("iframe").contents().find('.goog-te-menu2-item-selected').css('display', 'none');

    // Change menu's padding
    $("iframe").contents().find('.goog-te-menu2').css('padding', '0px');

    // Change the padding of the languages
    $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');

    // Change the width of the languages
    $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
    $("iframe").contents().find('td').css('width', '100%');

    // Change hover effects
    $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
      $(this).css('background-color', '#7BB242').find('span.text').css('color', 'white');
    }, function () {
      $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
    });

    // Change Google's default blue border
    $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

    // Change the iframe's box shadow
    $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');

    // Change iframes's size
    $("iframe").contents().find('.goog-te-menu2').css({
      'height': '100%',
      'width': '100%'
    });

    if ($(window).width() < 992) {
      // Change the iframe's size and position
      $(".goog-te-menu-frame").css({
        'height': '50%',
        'width': '50%',
        'top': '35em'
      });
    } else {
      // Change the iframe's size and position
      $(".goog-te-menu-frame").css({
        'height': '30%',
        'width': '30%',
        'top': '40em'
      });
    }

  });


});