export default class Util {

    static loading () {
        const printContainer = document.querySelector('.load');
        let template = ` 
        <div class="overlay">
            <img src="./img/loading.gif">
        </div>
        `;
        printContainer.insertAdjacentHTML('beforeend', template);
    }
    static loadComplete() {
        const printContainer = document.querySelector('.load');
        printContainer.innerHTML = null;
    }
    static startTime() {

        const checkTime = (i) => {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        }

        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let ampm = h >= 12 ? 'pm' : 'am';
        // let s = today.getSeconds();
        m = checkTime(m);
        // s = checkTime(s);
        document.querySelector('.time').innerHTML =
        h + ":" + m + " " + ampm;
        const t = setTimeout(Util.startTime, 1000);
    }
}