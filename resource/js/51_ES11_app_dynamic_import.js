// import * as hi from './app_dynamic_import_hi.js'

const btn = document.getElementById('btn')
btn.onclick = () => {
    import('./51_ES11_app_dynamic_import_hi.js').then(module => {
        module.hi()
    })

}