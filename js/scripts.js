$(document).ready(function() {
  $(".click_js").click(function() {
    $(".hide_js").toggle();
    $(".show_js").toggle();
  });

  $(".click_op").click(function() {
    $(".show_operator").toggle();
    $(".hide_operator").toggle();
  });

  $(".click_var").click(function() {
    $(".hide_variables").toggle();
    $(".show_variables").toggle();
  });

  $(".click_vnc").click(function() {
    $(".show_vnc").toggle();
    $(".hide_vnc").toggle();
  });

  $(".click_fun").click(function() {
    $(".hide_fun").toggle();
    $(".show_fun").toggle();
  });

  $(".click_methods").click(function() {
    $(".show_methods").toggle();
    $(".hide_methods").toggle();
  });
});
