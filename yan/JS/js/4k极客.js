var rule = { 
  title: '4k极客',
  host: 'http://www.i8k.cc',
            // homeUrl:'/',
  url: '/index.php/show/fyclass/page/fypage.html',
  detailUrl:'/index.php/detail/fyid.html',
  class_parse: '.navbar-items.swiper-wrapper&&li:gt(1):lt(8);a&&Text;a&&href;/(\\d+).html',
  //class_name: '电影&电视剧&综艺&动漫&纪录片',
  //class_url: '1&2&3&4&101',
  searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  play_parse: true,
  lazy: '',
  limit: 6,
  double:true, // 推荐内容是否双层定位
  推荐: '.module-main.tab-list.active;a.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
  一级: 'a.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    "title": "h1&&Text;.module-info-tag-link:eq(2)&&Text",
    "img": ".module-item-pic&&img&&data-original",
    "desc": "div.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text",
    "content": "p&&Text",
    "tabs": "#y-playList&&span",
    "lists": ".module-play-list-content:eq(#id) a"
  },
  搜索:'json:list;name;pic;;id',
}