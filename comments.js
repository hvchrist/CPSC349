$(document).ready(function() {
  // 'use strict';

  let posts = 'https://jsonplaceholder.typicode.com/posts';
  let comments = 'https://jsonplaceholder.typicode.com/comments';
  let template = $('#template').html();
  let numPosts = 1;

  $.getJSON(posts, function (data) {
    $.each(data, function (key,val) {
      // Add a new template article fro each post
      if (key < numPosts) {
        $('#main').append(template);
        // set the title and body
        $('#post-temp').html(val.title);
        $('#body-temp').html(val.body);
        // change the id of the post
        $('#body-temp').attr('id', 'body-' + val.id);
        $('#post-temp').attr('id', 'posts-' + val.id);
        $('/n').replaceWith('<br>');
      }
    });
  });

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
        $.getJSON(comments, function (data) {
          $.each(data, function (key, val) {
            // Add a new template article fro each post
            if (key < numPosts) {
              $('#main').append(template);
              // set the title and body
              $('#comments-temp').html(val.comments);
              // change the id of the post
              $('#comments-temp').attr('id', 'body-' + val.id);
              $('/n').replaceWith('<br>');
            }
          });
        });
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
});
