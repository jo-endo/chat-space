$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-box">
          <div class="Message-box__info">
            <div class="Message-box__info--name">
              ${message.user_name}
            </div>
            <div class="Message-box__info--date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message-box__message">
            <p class="Message-box__message--text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message-box">
        <div class="Message-box__info">
          <div class="Message-box__info--name">
            ${message.user_name}
          </div>
          <div class="Message-box__info--date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message-box__message">
          <p class="Message-box__message--text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $(".Message-form").on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({scrollTop: $('.Chat-main__message-list')[0].scrollHeight},'fast');      
      $('form')[0].reset();
      $('.Message-form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});

