// Convert cells for comparison
var isortopeCellFilter=function(e){var t=$(e).text(),n=t.replace(",",""),r=n.substr(1,n.length),i=n.substr(1,n.length),s=$(e).find("input"),o;return t!=""?isNaN(parseFloat(n))?isNaN(parseFloat(r))?isNaN(parseFloat(i))?o=t.toLowerCase():o=parseFloat(i):o=parseFloat(r):o=parseFloat(n):s.length>0?s.val()=="on"?o=s.is(":checked").toString():o=s.val().toLowerCase():o=$(e).html(),o};(function(e){e.fn.isortope=function(){return this.each(function(){var t=e(this);t.css("position","relative"),t.css("height",t.height());var n=t.find("th").length;for(var r=0;r<n;r++){var i=t.find("tr:first-child td:nth-child("+(r+1)+")").width();t.find("tr td:nth-child("+(r+1)+")").css("width",i);var s=t.find("th:nth-child("+(r+1)+")");s.css("width",s.width()),s.css("max-width",s.width())}var o={};for(var r=0;r<n;r++){var u="col"+r,a="return isortopeCellFilter(item.find('."+u+"'));",f=new Function("item",a);o[u]=f,t.find("tr td:nth-child("+(r+1)+")").addClass(u),t.find("th:nth-child("+(r+1)+")").attr("data-sort-type",u)}t.find("tbody").isotope({itemSelector:"tr",layout:"fitRows",getSortData:o});var l=t.find("thead").height();t.find("tr").css("top",l),t.find("th").css("cursor","pointer");var c=function(){var e=t.find("th.sortAsc,th.sortDesc");e.find(".sort-arrow").remove(),e.removeClass("sortAsc").removeClass("sortDesc")};t.find("th").click(function(){var n=e(this).attr("data-sort-type"),r;e(this).hasClass("sortAsc")?(r=!0,c(),e(this).html(e(this).html()+'<span class="sort-arrow">▼</span>'),e(this).addClass("sortDesc")):(r=!1,c(),e(this).html(e(this).html()+'<span class="sort-arrow">▲</span>'),e(this).addClass("sortAsc")),t.find("tbody").isotope({sortBy:n,sortAscending:!r}),t.trigger("sort")}),t.find("input").change(function(){var n=e(this).closest("tr");t.find("tbody").isotope("updateSortData",n)}),t.trigger("initialized")})}})(jQuery),$(document).ready(function(){$("table.isortope").isortope()});