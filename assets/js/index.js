window.onload = () => {
    app().navbar();
}

function app() {
   const app = {
    navbar() {
        const imagePath = '/assets/images/';
        navlist = [
        {
            title:'Главная страница', url:'/index.html',
            img:'home-icon.svg'
        },
        {
            title:'Игры', url:'all-games.html',
            img:'games-icon.svg',
            alt:'Game Icon',
            id:'',
        },
        {
            title:'О нас', url:'',
            img:'developer-icon.svg',
            alt:'Developer icon',
            fnc:'openTheModal().open()',
        },
        ]


        toHtml  = i => `
            <li onclick='${i.url == '' ? i.fnc : 'location.href="' + i.url + '"'}'>
              <img src="${imagePath + i.img}" alt="${i.alt}">
              <div>${i.title}</div>
            </li>
        `

        const navbarList = document.querySelector('.navbar-list');
        navbarList ? navbarList.innerHTML = navlist.map(toHtml).join('') : ''
        const dropdownList = document.querySelector('.dropdown-menu');
        dropdownList ? dropdownList.innerHTML = navlist.map(toHtml).join('') : ''


        const dropdown = document.querySelector('.dropdown-menu');
        const btn = document.querySelector('#navbar-db-btn');
    
        btn.onclick = () => {
            dropdown.classList.toggle('active')
            // setTimeout(() => {
            //     dropdown.classList.remove('active')
            // }, 10000)
        }
    },

    category(){
        html = document.querySelector('#categoryList');

        list = [
            {title:'Экшен', url:'/category/action.html'},
            {title:'Шутер', url:'/category/shooter.html'},
            {title:'Симулятор', url:'/category/simulator.html'},
            {title:'Хоррор', url:'/category/xorror.html'},
        ]


        toHtml = i => `
            <button class='category-item-button' onclick='location.href="${i.url}"'>
                ${i.title}
            </button>
        `;

        html ? html.innerHTML = list.map(toHtml).join('') : ''
    },

   }

   return app
}

const modal = mC({
            closable:true,
            width: '450px',
            footerButtons:[
                {text:'Закрыть', type:'danger', handler(){
                    modal.close()
                }},
                
            ]
        })

function openTheModal() {
    open = {
        open(){
            modal.open()
            modal.setContent(`
                <div class='dev-ops-wp'>
                    <img src='/assets/images/developer-icon.svg'/>
                    <h4>GoodStack Dev.</h4>
                    <p>Сайт создан с целью облегчить загрузку игр, и на нашем сайте вы можете получить любую игру, какую захотите, для своего телефона или компьютера.</p>

                    <div class='lide'>
                        <p class='title'>Программист</p>
                        <p>Yhtyýar Haýtekow</p>
                    </div>
                </div>
            `)
        }
    }

    return open
}

