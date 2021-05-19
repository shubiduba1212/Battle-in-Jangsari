//epilogue.js
$(document).ready(function(){
    //배열 패턴 = ["이미지", "내용"]
    var $epi_arr = [
      ["ep_top_01.png", '“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”'],
      ["ep_top_02.png", '“학도병들은 군번 없는 용사였다.싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행한 줄은 몰랐다"'],
      ["ep_top_03.png", '“화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해 무엇보다 진정성을 담고자 했다”']
    ]

    var $epi_box = `
    <div class="row row_h_10">
      <div class="col-sm-5 pad_h_10">
        <div class="epi_img"></div>
      </div>
      <div class="col-sm-7 pad_h_10">
        <div class="epi_txt">
          <div class="epi_dt">
            <p></p>
          </div>
        </div>
      </div> 
    </div>
    `;

    var $epi_bottom = `
    <div class="epi">
        <div class="epi_img"></div>
    </div>
    `

    for(i=0; i<$epi_arr.length; i++){
      $(".origin").append($epi_box);
    };

    
    $(".origin .row").each(function(index){
        $(this).find(".epi_img").css("background-image","url(img/"+$epi_arr[index][0]+")");
        $(this).find(".epi_txt .epi_dt p").text($epi_arr[index][1]);
    });

    $(".origin").append($epi_bottom);
    $(".epi .epi_img").css("background-image","url(img/ep_bottom.png)");









});