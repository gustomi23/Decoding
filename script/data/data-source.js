// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }


// DataSource.prototype.searchClub = function (keyword) {
//     //diubah
//     // const filteredClubs = clubs.filter(function (club) {
//     //     return club.name.toUpperCase().includes(keyword.toUpperCase());
//     // });
//     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed('${keyword} is not found');
//     }
// };

// perubhanya menggunkan metde
// class DataSource {
//     constructor(onSuccess, onFailed) {
//         this.onSuccess = onSuccess;
//         this.onFailed = onFailed;
//     }

//     searchClub(keyword) {
//         const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//         if (filteredClubs.length) {
//             this.onSuccess(filteredClubs);
//         } else {
//             this.onFailed(`${keyword} is not found"`);
//         }
//     }
// }


//=========================================================================
// perubahn setelah menggunakan callback function menjadi promise

// class constructor dihilangkan

//karena kita sudah menghapus callback function beserta constructor class-nya, kita tidak perlu membuat instance dari class DataSource. Kita buat method searchClub dapat diakses secara langsung dari DataSource tanpa harus membuat instance. 

//kita perlu menambahkan keyword static sebelum membuat method-nya.

//Setelah itu, kita buat method searchClub mengembalikan nilai promise 
//Jangan lupa ubah juga pemanggilan callback onSuccess() dan onFailed(), menggunakan resolve() dan reject(). Maka sekarang class DataSource akan tampak

import clubs from './clubs.js';

class DataSource {
    static searchClub(keyword) {
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found"`);
            }
        });
    }
}

export default DataSource;