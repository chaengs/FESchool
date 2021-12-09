let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : 'section1'
}, {
    id : 2,
    title : 'title2',
    content : 'content2',
    section : 'section2'
}, {
    id : 3,
    title : 'title3',
    content : 'content3',
    section : 'section3'
}];

let s = 'section3'
let data = s? blogs.filter(b => b.section === s) : blogs; //조건?true:false