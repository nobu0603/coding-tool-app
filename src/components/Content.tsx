import React, { use, useEffect } from 'react'

export default function Content() {
    useEffect(() => {
        let textArea = document.querySelector<HTMLTextAreaElement>('#textArea')
        const inputArea1 = document.querySelector<HTMLInputElement>('#inputArea1')
        const inputArea2 = document.querySelector<HTMLInputElement>('#inputArea2')
        const inputArea3 = document.querySelector<HTMLInputElement>('#inputArea3')
        const inputArea4 = document.querySelector<HTMLInputElement>('#inputArea4')
        const inputArea5 = document.querySelector<HTMLInputElement>('#inputArea5')
        const inputArea6 = document.querySelector<HTMLInputElement>('#inputArea6')
        const inputArea7 = document.querySelector<HTMLInputElement>('#inputArea7')
        const inputArea8 = document.querySelector<HTMLInputElement>('#inputArea8')
        const inputArea9 = document.querySelector<HTMLInputElement>('#inputArea9')
        const inputArea10 = document.querySelector<HTMLInputElement>('#inputArea10')


        const copyHTML = document.querySelector<HTMLButtonElement>('#copyHTML')
        const renderHTML = document.querySelector<HTMLButtonElement>('#renderHTML')
        

        copyHTML?.addEventListener('click', () => {
            const text: string = textArea?.value ?? '';
            navigator.clipboard.writeText(text);
        })

        renderHTML?.addEventListener('click', () => {
            const text01 = inputArea1?.value
            const text02 = inputArea2?.value
            const text03 = inputArea3?.value
            const text04 = inputArea4?.value
            const text05 = inputArea5?.value
            const text06 = inputArea6?.value
            const text07 = inputArea7?.value
            const text08 = inputArea8?.value
            const text09 = inputArea9?.value
            const text10 = inputArea10?.value

            // text01からtext10までの値を配列に格納
            const textArray = [text01, text02, text03, text04, text05, text06, text07, text08, text09, text10]
            // textAreaの値をHTML要素として取得する
            const text: string = textArea?.value ?? '';
            const createHtml = document.createElement('div')
            createHtml.innerHTML = text
            // 空の要素を取得
            const targetElement = createHtml.querySelectorAll(':empty:not(img):not(br)');
            // 空の要素にtextArrayの値を順番に入れていく
            for (let i = 0; i < targetElement.length; i++) {
                targetElement[i].innerHTML = textArray[i] ?? '';
            }
            // createHtmlの中身をtextAreaのvalueに入れる
            textArea!.value = createHtml.innerHTML

            // text01からtext10までの値をリセットする
            inputArea1!.value = ''
            inputArea2!.value = ''
            inputArea3!.value = ''
            inputArea4!.value = ''
            inputArea5!.value = ''
            inputArea6!.value = ''
            inputArea7!.value = ''
            inputArea8!.value = ''
            inputArea9!.value = ''
            inputArea10!.value = ''

        })
    }, []);

          return (
            <div className='flex justify-between'>
                <div className="max-w-[60%] w-full flex flex-col gap-3">
                    <div>
                        <label htmlFor='textArea' className="mb-1 block text-sm font-medium text-gray-700">Your HTMl Code</label>
                        <textarea id="textArea" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50" rows={30} placeholder="Paste Your HTML Code"></textarea>
                    </div>
                    <div className="w-full">
                        <button type="button" id='copyHTML' className="block ml-auto rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Copy HTML</button>
                    </div>
                </div>
                <div className='max-w-[38%] w-full flex flex-col gap-3'>
                    <div>
                        <label htmlFor="inputArea1" className="mb-1 block text-sm font-medium text-gray-700">Your Text 01</label>
                        <input type="text" id="inputArea1" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-01" />
                    </div>
                    <div>
                        <label htmlFor="inputArea2" className="mb-1 block text-sm font-medium text-gray-700">Your Text 02</label>
                        <input type="text" id="inputArea2" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-02" />
                    </div>
                    <div>
                        <label htmlFor="inputArea3" className="mb-1 block text-sm font-medium text-gray-700">Your Text 03</label>
                        <input type="text" id="inputArea3" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-03" />
                    </div>
                    <div>
                        <label htmlFor="inputArea4" className="mb-1 block text-sm font-medium text-gray-700">Your Text 04</label>
                        <input type="text" id="inputArea4" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-04" />
                    </div>
                    <div>
                <label htmlFor="inputArea5" className="mb-1 block text-sm font-medium text-gray-700">Your Text 05</label>
                <input type="text" id="inputArea5" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-05" />
            </div>
            <div>
                <label htmlFor="inputArea6" className="mb-1 block text-sm font-medium text-gray-700">Your Text 06</label>
                <input type="text" id="inputArea6" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-06" />
            </div>
            <div>
                <label htmlFor="inputArea7" className="mb-1 block text-sm font-medium text-gray-700">Your Text 07</label>
                <input type="text" id="inputArea7" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-07" />
            </div>
            <div>
                <label htmlFor="inputArea8" className="mb-1 block text-sm font-medium text-gray-700">Your Text 08</label>
                <input type="text" id="inputArea8" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-08" />
            </div>
            <div>
                <label htmlFor="inputArea9" className="mb-1 block text-sm font-medium text-gray-700">Your Text 09</label>
                <input type="text" id="inputArea9" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-09" />
            </div>
            <div>
                <label htmlFor="inputArea10" className="mb-1 block text-sm font-medium text-gray-700">Your Text 10</label>
                <input type="text" id="inputArea10" className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="text-10" />
            </div>
            <div className="w-full">
                <button type="button" id='renderHTML' className="block ml-auto rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Render HTML</button>
            </div>
        </div>
    </div>
  )
}