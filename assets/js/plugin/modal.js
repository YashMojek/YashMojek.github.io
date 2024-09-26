Element.prototype.appendAfter = function(element){
    element.parentNode.insertBefore(this, element.nextSibling)
}
function _createModalFooter(buttons = []){
    if(!buttons.length == 0){
        const wrap = document.createElement('div');
        wrap.classList.add('modal-footer');
        buttons.forEach(btn => {
            const $btn = document.createElement('button');
            $btn.classList.add('btn')
            $btn.textContent = btn.text
            $btn.classList.add(`btn-${btn.type || 'secondary'}`)
            $btn.onclick = btn.handler || noop
            wrap.style.padding = btn.padding
            wrap.appendChild($btn)
        })
        return wrap
    }
}
function _createModal(options){
    const DEFAULT_MODAL_WIDTH = '600px';
    const modal = document.createElement('div');
    modal.classList.add('modal-component');
    modal.insertAdjacentHTML('afterbegin',   `
      <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_MODAL_WIDTH}; margin-top:${options.options}px; padding:${options.padding}px;">
                <div class="modal-body" data-content >
                    ${options.content || '404 Not Found'}
                </div>
            </div>
        </div>
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.querySelector('.content').appendChild(modal)
    return modal
}
function mC(options) {
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false
    const modal = {
        open(){
            if(destroyed){
                return console.log('modal is destroyed')
            }
            !closing && $modal.classList.add('open')
            
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hiding')
            setTimeout(() => {
                $modal.classList.remove('hiding')
                closing = false
            }, 300)
        },
    }
    let listener = event => {
        if(closing){
            event.target.dataset.close && modal.close()
        }
        
    }
    $modal.addEventListener('click', listener)
    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}