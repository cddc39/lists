$(function () {
  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
});

$("#avocadoes-item").click(function () {
  window.location = "#crossout"
});

$("#avocadoes-add").click(function () {
  count = Number($("#avocadoes-count").text());
  $("#avocadoes-count").text(count + 1);
  event.stopPropagation();
});

$("#avocadoes-sub").click(function () {
  count = Number($("#avocadoes-count").text());
  $("#avocadoes-count").text(count - 1);
  event.stopPropagation();
});

$("#avocadoes-edit").click(function () {
  window.location = "#edit";
  event.stopPropagation();
});

$("#tomatoes-item").click(function () {
  window.location = "#crossout"
});

$("#tomatoes-add").click(function () {
  count = Number($("#tomatoes-count").text());
  $("#tomatoes-count").text(count + 1);
  event.stopPropagation();
});

$("#tomatoes-sub").click(function () {
  count = Number($("#tomatoes-count").text());
  $("#tomatoes-count").text(count - 1);
  event.stopPropagation();
});

$("#tomatoes-edit").click(function () {
  window.location = "#edit";
  event.stopPropagation();
});

$("#onions-item").click(function () {
  window.location = "#crossout"
});

$("#onions-add").click(function () {
  count = Number($("#onions-count").text());
  $("#onions-count").text(count + 1);
  event.stopPropagation();
});

$("#onions-sub").click(function () {
  count = Number($("#onions-count").text());
  $("#onions-count").text(count - 1);
  event.stopPropagation();
});

$("#onions-edit").click(function () {
  window.location = "#edit";
  event.stopPropagation();
});

$("#yogurt-item").click(function () {
  window.location = "#crossout"
});

$("#yogurt-add").click(function () {
  count = Number($("#yogurt-count").text());
  $("#yogurt-count").text(count + 1);
  event.stopPropagation();
});

$("#yogurt-sub").click(function () {
  count = Number($("#yogurt-count").text());
  $("#yogurt-count").text(count - 1);
  event.stopPropagation();
});

$("#yogurt-edit").click(function () {
  window.location = "#edit";
  event.stopPropagation();
});
