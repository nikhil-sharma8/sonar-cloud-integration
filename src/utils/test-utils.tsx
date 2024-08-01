import {cleanup, render} from '@testing-library/react'
import { afterEach } from 'vitest'


afterEach(() => {
    cleanup();
})

function customRender(ui: React.ReactElement, options = {}) {
    return render(ui, {
        //wrap provider(s) if needed
        wrapper: {{ children }} => children, 
        
    })
}