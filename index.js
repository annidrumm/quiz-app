"use strict";

// start bookmarks
var bookmarkButton = document.querySelector('#bookmark1');
bookmarkButton.addEventListener('click', function () {
  return bookmarkButton.classList.toggle('card__bookmark-button--active');
});
var bookmarkButton2 = document.querySelector('#bookmark2');
bookmarkButton2.addEventListener('click', function () {
  return bookmarkButton2.classList.toggle('card__bookmark-button--active');
});
var bookmarkButton3 = document.querySelector('#bookmark3');
bookmarkButton3.addEventListener('click', function () {
  return bookmarkButton3.classList.toggle('card__bookmark-button--active');
}); // close bookmarks
// start navigation

var navHome = document.querySelector('#nav_home');
var navBookmarks = document.querySelector('#nav_bookmark');
var navCreate = document.querySelector('#nav_create');
var navProfile = document.querySelector('#nav_profile');
var indexPage = document.querySelector('#home');
var indexBookmarks = document.querySelector('#bookmarks');
var indexCreate = document.querySelector('#create');
var indexProfile = document.querySelector('#profile');
var headerHome = document.querySelector('#header1');
var headerBookmark = document.querySelector('#header2');
var headerCreate = document.querySelector('#header3');
var headerProfile = document.querySelector('#header4');
navHome.addEventListener('click', function () {
  indexPage.classList.remove('displaynone');
  indexBookmarks.classList.add('displaynone');
  indexCreate.classList.add('displaynone');
  indexProfile.classList.add('displaynone');
});
navHome.addEventListener('click', function () {
  headerHome.classList.remove('displaynone');
  headerBookmark.classList.add('displaynone');
  headerCreate.classList.add('displaynone');
  headerProfile.classList.add('displaynone');
});
navBookmarks.addEventListener('click', function () {
  headerBookmark.classList.remove('displaynone');
  headerHome.classList.add('displaynone');
  headerCreate.classList.add('displaynone');
  headerProfile.classList.add('displaynone');
});
navBookmarks.addEventListener('click', function () {
  indexBookmarks.classList.remove('displaynone');
  indexPage.classList.add('displaynone');
  indexCreate.classList.add('displaynone');
  indexProfile.classList.add('displaynone');
});
navCreate.addEventListener('click', function () {
  indexCreate.classList.remove('displaynone');
  indexPage.classList.add('displaynone');
  indexBookmarks.classList.add('displaynone');
  indexProfile.classList.add('displaynone');
});
navCreate.addEventListener('click', function () {
  headerCreate.classList.remove('displaynone');
  headerBookmark.classList.add('displaynone');
  headerProfile.classList.add('displaynone');
  headerHome.classList.add('displaynone');
});
navProfile.addEventListener('click', function () {
  indexProfile.classList.remove('displaynone');
  indexPage.classList.add('displaynone');
  indexBookmarks.classList.add('displaynone');
  indexCreate.classList.add('displaynone');
});
navProfile.addEventListener('click', function () {
  headerProfile.classList.remove('displaynone');
  headerCreate.classList.add('displaynone');
  headerBookmark.classList.add('displaynone');
  headerHome.classList.add('displaynone');
}); // close navigation