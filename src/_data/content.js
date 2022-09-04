const header = 'Welcome to INFO 654-04 News of the Week!';
const footer = 'This has been an INFO 654-04 News of the Week production.';


// var Airtable = require("airtable");
// var base = new Airtable({apiKey: 'keyi8WG290ZaqOm5r'}).base('appZAykA0vRAQ2I6e');

// module.exports = function() {
//   return new Promise((resolve, reject) => {
//     const allCases = [];

//     base("news")
//       .select({ view: "Main" })
//       .eachPage(
//         function page(records, fetchNextPage) {
//           records.forEach(record => {
//             allCases.push(
//             // {
//             //   id: record._rawJson.id,
//             //   ...record._rawJson.fields
//             // }
//             {
//                "id": record._rawJson.id,
//                 "datetime": record._rawJson.datetime,
//                 "title": record._rawJson.title,
//                 "body": record._rawJson.body,
//                 "links": [
//                     {
//                         "href": record._rawJson.link_URL,
//                         "linkText": record._rawJson.link_text
//                     }
//                 ] 
//               }
//             );
//           });
//           console.log(allCases);

//           fetchNextPage();
//         },
//         function done(err) {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(allCases);
//             console.log(resolve(allCases));
//           }
//         }
//       );
//   });
// };



// -- 

// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyi8WG290ZaqOm5r'}).base('appZAykA0vRAQ2I6e');


// const entries = [];

// console.log(entries);

// base('news').select({
//     // Selecting the first 3 records in Main:
//     //maxRecords: 3,
//     view: "Main"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         var entry = {
//        "id": record.get('id'),
//         "datetime": record.get('datetime'),
//         "title": record.get('title'),
//         "body": record.get('body'),
//         "links": [
//             {
//                 "href": record.get('link_URL'),
//                 "linkText": record.get('link_text')
//             }
//         ] 
//       };
//       //console.log(entry);
//       entries.push(entry);
//       return entry, entries;
//     });
//     // console.log(entries);

// var another = {
//     "id": "AI art",
//     "datetime": "2022-08-25",
//     "title": "AI Creating 'Art' Is An Ethical And Copyright Nightmare",
//     image: {
//       link: 'https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060',
//       src: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/5f3bd450cde649dee0acd934ca7c6b6e.jpg',
//       alt: 'Kotaku image',
//       caption: 'AI creating art?',
//     },
//     "body": "If a machine makes art, is it even art? And what does this mean for actual artists?",
//     "links": [
//         {
//             "href": "https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060",
//             "linkText": "AI Creating 'Art' Is An Ethical And Copyright Nightmare"
//         }
//     ]
// };
// entries.push(another);
// // console.log(entries);

// //console.log(entries[2]);    

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     //fetchNextPage();
//     //console.log(entries[2]);
//     return entries;
// }, function done(err) {
//     if (err) { console.error(err); return entry, entries; }
// });

// // console.log(entries);
// // console.log(header);


// for (var i = 0; i < entries.length; i++) {
//     var entry1 = entries[i]; 
//     console.log(entry1)}


// ---

const entries = [];
//const entries = [
//   This is the minimum necessary in YAML:
// (And you can convert it here: https://jsonformatter.org/yaml-to-json)
// id: 'minimum test'
// datetime: '2022-08-20'
// title: 'What a test' 
// body: 'This is a test of the system.'
// links:
//  - href: 'https://example.com'
//    linkText: 'Test link'
// {
//   id: 2,
//   datetime: '2022-09-01T15:49:38.000Z',
//   title: 'Test tile',
//   body: 'Test\t\t\t\n',
//   links: [ { href: 'https://example.com', linkText: 'This is a test link!' } ]
// },
// {
//     "id": "AI art",
//     "datetime": "2022-08-25",
//     "title": "AI Creating 'Art' Is An Ethical And Copyright Nightmare",
//     image: {
//       link: 'https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060',
//       src: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/5f3bd450cde649dee0acd934ca7c6b6e.jpg',
//       alt: 'Kotaku image',
//       caption: 'AI creating art?',
//     },
//     "body": "If a machine makes art, is it even art? And what does this mean for actual artists?",
//     "links": [
//         {
//             "href": "https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060",
//             "linkText": "AI Creating 'Art' Is An Ethical And Copyright Nightmare"
//         }
//     ]
// },
// {
//     "id": "remote scanning",
//     "datetime": "2022-08-25",
//     "title": "Remote Scan of Student’s Room Before Test Violated His Privacy, Judge Rules",
//     image: {
//       link: 'https://www.nytimes.com/2022/08/25/us/remote-testing-student-home-scan-privacy.html',
//       src: 'https://static01.nyt.com/images/2022/08/25/lens/25xp-testruiling-01/25xp-testruiling-01-superJumbo.jpg?quality=75&auto=webp',
//       alt: 'NYT image',
//       caption: "Where's the line on privacy?",
//     },
//     "body": "A federal judge said Cleveland State University violated the Fourth Amendment when it used software to scan a student’s bedroom, a practice that has grown during the Covid-19 pandemic.",
//     "links": [
//         {
//             "href": "https://www.nytimes.com/2022/08/25/us/remote-testing-student-home-scan-privacy.html",
//             "linkText": "Remote Scan of Student’s Room Before Test Violated His Privacy, Judge Rules"
//         }
//     ]
// },
//   {
//     id: 'cat',
//     categories: ['cat'],
//     color: 'green',
//     faicon: 'cat',
//     datetime: '2021-01-01 05:00',
//     title: 'Cats are very good',
//     image: {
//       link: 'http://placekitten.com',
//       src: 'http://placekitten.com/200/300',
//       alt: 'A placeholder kitten',
//       caption: 'Kitten!',
//     },
//     body: "The best thing in the universe is a cardboard box. Chirp at birds catasstrophe for meowwww for hiding behind the couch until lured out by a feathery toy for morning beauty routine of licking self sugar, my siamese, stalks me (in a good way), day and night lick the other cats. Pushed the mug off the table shove bum in owner's face like camera lens or tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad and grass smells good, licks your face, but hiiiiiiiiii feed me now.",
//     links: [
//       {
//         href: 'https://en.wikipedia.org/wiki/Cat',
//         linkText: 'Cat',
//       },
//     ],
//   },
// ];


// Page details
const pageTitle = 'INFO 654-04 News of the Week'; // The title of the page that shows in the browser tab
const pageDescription = 'News items of interest from the INFO 654-04 class.'; // The description of the page for search engines
const pageAuthor = 'Pratt Institute School of Information INFO 654-04 Class, Fall 2022'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
