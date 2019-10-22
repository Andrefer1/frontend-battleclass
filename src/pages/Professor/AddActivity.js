import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './AddActivity.css';

export default function Activity() {
    const [showMembers, setShowMembers] = useState('')

    var qtd_alternativas = 0

    function dropdown() {
        setShowMembers('true')

    }

    function create_CKEditor(){
       let radioHTML = "<input type='radio' name='radioButton' className='input-radio' />"
        let get_div_radio = document.querySelector('.radio-alternative')
        /*/*let create_radio = document.createElement('radio')*/
        /*/*get_div_radio.appendChild(radioHTML)*/
        /*get_div_radio.innerHTML = radioHTML*/


        /*RADIO*/

        let theInput = document.createElement("input");
        theInput.setAttribute('type',"radio");
        theInput.setAttribute('name','radioButton');
        theInput.setAttribute('className','input-radio');
        get_div_radio.appendChild(theInput)

        let get_div_input_br2 = document.querySelector('.radio-alternative')
        let element_br2 = document.createElement('br')
        get_div_input_br2.appendChild(element_br2)


        /*EDITOR*/
        let get_div_editor_br = document.querySelector('.editor-alternative')
        let create_br = document.createElement('br')
        get_div_editor_br.appendChild(create_br)
        /*get_div_radio.appendChild(create_br)*/

        /*let CKEditorHTML = "<CKEditor id='Editor-teste' editor={ ClassicEditor } onInit={ editor => { // You can store the 'editor' and use when it is needed. console.log( 'Editor is ready to use!', editor ); } } onChange={ ( event, editor ) => { const data = editor.getData(); console.log( { event, editor, data } ); } } onBlur={ ( event, editor ) => { console.log( 'Blur.', editor ); } } onFocus={ ( event, editor ) => { console.log( 'Focus.', editor ); } } />"
        */
        ClassicEditor
            .create( document.querySelector( '#editor' ), {
                /*removePlugins: [ 'Bold', 'Link' ],*/
                toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                    ]
                }
            } )
            .catch( error => {
                console.log( error );
            } );
        const CKEditorHTML = `<${CKEditor}
                editor={ ${ClassicEditor} }

                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />`


        let get_div_editor = document.querySelector('.editor-alternative')
        /*let get_CKEditor = document.getElementById('Editor-teste')
        let create_editor = document.createElement(get_CKEditor)
        get_div_editor.appendChild(create_editor)*/
        get_div_editor.innerHTML = CKEditorHTML
        
        let get_div_editor_br2 = document.querySelector('.editor-alternative')
        let create_br2= document.createElement('br')
        get_div_editor_br2.appendChild(create_br2)
    }

    function alternativas() {
        this.qtd_alternativas += 1

    }

    return (
        <div className='individual-activity'>

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a href='/main'>
                            BATTLECLASS
                        </a>
                    </div>
                    <div className='student-data'>
                        <div className='activity-title'>
                            [Título da atividade]
                        </div>
                        
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            [Nota]
                        </div>
                    </div>
                    <div className='dates'>
                        <div className='trace'>
                            Postado em: dd/MM/aaaa
                        </div>
                        <div className='team-points-principal'>
                            Entrega: dd/MM/aaaa
                        </div>
                    </div>
                </div>

                <hr id='hr' />
            </nav>

            <div className='menu'>
            <a href='/dashboard'> Página Inicial </a>
                <a href='/students'> Alunos </a>
                <a href='/teams'> Equipes </a>
                <a href='/activitys'> Atividades </a>
                <div className='menu-bottom'>
                    <a href='/settings'> Configurações </a>
                    <a href='/contacts'> Contatos </a>
                    <a href='/about'> Sobre </a>
                </div>
            </div>

            <div className='rankings'>
                <div className='ranking-do-dia' >
                    <div className='ranking-name'>
                        <b> Ranking do Dia </b>
                    </div>
                    <ul>
                        <li>
                            <div className='team-ranking' onClick={dropdown}>
                                <div className='team-profile'>
                                    <img src={userProfile} alt='Imagem do time' />
                                </div>
                                <div className='team-name'>
                                    Bonde do Tigrãaaaaao
                                </div>
                                <div className='team-points'>
                                    75
                                </div>
                            </div>
                            <RcIf if={showMembers === "true"}>
                                teste
                            </RcIf>
                        </li>
                        <hr id='hr-ranking' />
                        <li>
                            <div className='team-ranking'>
                                <div className='team-profile'>
                                    <img src={userProfile} alt='Imagem do time' />
                                </div>
                                <div className='team-name'>
                                    Equipe 2
                            </div>
                                <div className='team-points'>
                                    60
                            </div>
                            </div>
                        </li>
                        <hr id='hr-ranking' />
                        <li>
                            <div className='team-ranking'>
                                <div className='team-profile'>
                                    <img src={userProfile} alt='Imagem do time' />
                                </div>
                                <div className='team-name'>
                                    Equipe 3
                            </div>
                                <div className='team-points'>
                                    57
                            </div>
                            </div>
                        </li>
                        <hr id='hr-ranking' />
                    </ul>
                </div>
            </div>

            <div className='content'>
                <div className='input-title'>
                    <label><strong>Título da atividade</strong></label>
                    <input type='text' className="form-control" placeholder='Adicione um título'  />
                </div>
                <div className='cards-questions'>
                    <div className='individual-card'>
                        <b>Questão 1</b>
                        <div className='str-content'>
                            <strong>Conteúdo</strong>
                        </div>
                        <div className='editor'>
                            {/*onclick={get_CKditor()}*/}
                            <CKEditor
                                editor={ ClassicEditor }

                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>

                        <div className='alternative'>
                            <strong>Alternativas</strong><br />
                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    a)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    b)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    c)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    d)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    e)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>

                        </div>
                
                        <div className='buttons'>
                            <div>
                                {/*<button type="button" className="btn btn-outline-primary add-alternative" onClick={create_CKEditor}>+ Alternativa</button>*/}
                            </div>
                            <div>
                                <button className='btn btn-primary add' id='teste'>Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cards-questions'>
                    <div className='individual-card'>
                        <b>Questão 2</b>
                        <div className='str-content'>
                            <strong>Conteúdo</strong>
                        </div>
                        <div className='editor'>
                            {/*onclick={get_CKditor()}*/}
                            <CKEditor
                                editor={ ClassicEditor }

                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>

                        <div className='alternative'>
                            <strong>Alternativas</strong><br />
                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    a)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    b)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    c)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    d)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    e)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>

                        </div>
                
                        <div className='buttons'>
                            <div>
                                {/*<button type="button" className="btn btn-outline-primary add-alternative" onClick={create_CKEditor}>+ Alternativa</button>*/}
                            </div>
                            <div>
                                <button className='btn btn-primary add' id='teste'>Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cards-questions'>
                    <div className='individual-card'>
                        <b>Questão 3</b>
                        <div className='str-content'>
                            <strong>Conteúdo</strong>
                        </div>
                        <div className='editor'>
                            {/*onclick={get_CKditor()}*/}
                            <CKEditor
                                editor={ ClassicEditor }

                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>

                        <div className='alternative'>
                            <strong>Alternativas</strong><br />
                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    a)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    b)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    c)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    d)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    e)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>

                        </div>
                
                        <div className='buttons'>
                            <div>
                                {/*<button type="button" className="btn btn-outline-primary add-alternative" onClick={create_CKEditor}>+ Alternativa</button>*/}
                            </div>
                            <div>
                                <button className='btn btn-primary add' id='teste'>Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cards-questions'>
                    <div className='individual-card'>
                        <b>Questão 4</b>
                        <div className='str-content'>
                            <strong>Conteúdo</strong>
                        </div>
                        <div className='editor'>
                            {/*onclick={get_CKditor()}*/}
                            <CKEditor
                                editor={ ClassicEditor }

                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>

                        <div className='alternative'>
                            <strong>Alternativas</strong><br />
                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    a)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    b)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    c)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    d)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    e)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>

                        </div>
                
                        <div className='buttons'>
                            <div>
                                {/*<button type="button" className="btn btn-outline-primary add-alternative" onClick={create_CKEditor}>+ Alternativa</button>*/}
                            </div>
                            <div>
                                <button className='btn btn-primary add' id='teste'>Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='cards-questions'>
                    <div className='individual-card'>
                        <b>Questão 5</b>
                        <div className='str-content'>
                            <strong>Conteúdo</strong>
                        </div>
                        <div className='editor'>
                            {/*onclick={get_CKditor()}*/}
                            <CKEditor
                                editor={ ClassicEditor }

                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>

                        <div className='alternative'>
                            <strong>Alternativas</strong><br />
                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    a)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    b)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    c)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    d)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />

                                </div>
                            </div>

                            <div className='letter-editor'>
                                <div className='letter-alternative'>
                                    e)
                                </div>
                                <br/>
                                <div className='editor-alternative'>
                                    <CKEditor
                                        editor={ ClassicEditor }

                                        onInit={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>

                        </div>
                
                        <div className='buttons'>
                            <div>
                                {/*<button type="button" className="btn btn-outline-primary add-alternative" onClick={create_CKEditor}>+ Alternativa</button>*/}
                            </div>
                            <div>
                                <button className='btn btn-primary add' id='teste'>Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
