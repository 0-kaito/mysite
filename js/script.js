$(document).ready(function(){
    $('.slick-slider').slick({
      autoplay: true, // 自動再生
      autoplaySpeed: 3000, // 各スライドの表示時間（ミリ秒）
      arrows: true, // 前後のナビゲーションを表示
      dots: false // ドットのナビゲーションを表示しない
    }); 
     $('.slick-slider5').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 各スライドの表示時間（ミリ秒）
        arrows: true, // 前後のナビゲーションを表示
        dots: false, // ドットのナビゲーションを表示しない
        slidesToShow: 5, // 一度に表示するスライド数
        slidesToScroll: 1, // 一度にスクロールするスライド数
        rtl: false, // 右から左にアニメーションする（falseに変更）
        cssEase: 'linear', // アニメーションのスピードを線形に設定
      });
      $('.slick-slider10').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 各スライドの表示時間（ミリ秒）
        arrows: true, // 前後のナビゲーションを表示
        dots: false, // ドットのナビゲーションを表示しない
        slidesToShow: 5, // 一度に表示するスライド数
        slidesToScroll: 1, // 一度にスクロールするスライド数
        rtl: true, // 右から左にアニメーションする（falseに変更）
        cssEase: 'linear', // アニメーションのスピードを線形に設定
      });
      });


      
  