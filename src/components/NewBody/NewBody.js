import React, { useState } from 'react';
import './NewBody.scss';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
const NewBody = () => {
    const [ mode, setMode ] = useState(false);
    return (
        <div className={`App ${mode ? '' : 'dark-mode'}`}>
            <Nav setMode={setMode} mode={mode} />
            <div className='Home'>
                <div className='home-left'>
                    <div className='header fadeInUp' style={{ animationDelay: '1s' }}>
                        <div className='actions'>
                            <h5>19 May, 11:53 PM IST</h5>
                        </div>
                    </div>
                    <div className='Level'>
                        <div className='level-item is-cherry fadeInUp' style={{ animationDelay: '1s' }}>
                            <h5>Confirmed</h5>
                            <h4>[+6,141]</h4>
                            <h1>1,06,468</h1>
                        </div>
                        <div className='level-item is-blue fadeInUp' style={{ animationDelay: '1.1s' }}>
                            <h5 className='heading'>Active</h5>
                            <h4>&nbsp;</h4>
                            <h1 className='title has-text-info'>60,854</h1>
                        </div>
                        <div className='level-item is-green fadeInUp' style={{ animationDelay: '1.2s' }}>
                            <h5 className='heading'>Recovered</h5>
                            <h4>[+3,030]</h4>
                            <h1 className='title has-text-success'>42,307</h1>
                        </div>
                        <div className='level-item is-gray fadeInUp' style={{ animationDelay: '1.3s' }}>
                            <h5 className='heading'>Deceased</h5>
                            <h4>[+145]</h4>
                            <h1 className='title has-text-grey'>3,301</h1>
                        </div>
                    </div>
                    <div className='Minigraph'>
                        <div className='svg-parent fadeInUp' style={{ animationDelay: '1.4s' }}>
                            <svg width='100' height='75' viewBox='0 0 100 75' preserveAspectRatio='xMidYMid meet'>
                                <path
                                    fill='none'
                                    stroke='#ff073a99'
                                    stroke-width='2.5'
                                    cursor='pointer'
                                    d='M5,34.73538511643055C5,34.73538511643055,8.157894736842104,32.06901698963252,9.736842105263158,31.34424360853281C11.31578947368421,30.619470227433098,12.894736842105262,30.91488899744884,14.473684210526315,30.386744829832274C16.052631578947366,29.858600662215707,17.63157894736842,29.21266894642566,19.210526315789473,28.175378602833412C20.789473684210524,27.138088259241165,22.368421052631575,24.181050860337628,23.94736842105263,24.163002768278787C25.526315789473685,24.144954676219946,27.10526315789474,28.01579547304999,28.68421052631579,28.067090050480378C30.263157894736842,28.118384627910764,31.842105263157894,24.82508277696358,33.421052631578945,24.4707702328611C35,24.11645768875862,36.57894736842105,25.691391195787876,38.1578947368421,25.941214785865498C39.73684210526316,26.19103837594312,41.315789473684205,25.809178743961354,42.89473684210526,25.96971177332682C44.473684210526315,26.13024480269229,46.05263157894737,27.827715355805246,47.631578947368425,26.9044129620583C49.21052631578948,25.98111056831135,50.78947368421053,20.82600553655756,52.36842105263158,20.429897410845136C53.94736842105264,20.033789285132713,55.526315789473685,23.816289420832653,57.10526315789474,24.527764207783747C58.684210526315795,25.23923899473484,60.26315789473684,24.826032676545623,61.8421052631579,24.698746132551705C63.42105263157895,24.571459588557786,65,24.171551864517184,66.57894736842105,23.764044943820227C68.15789473684211,23.35653802312327,69.73684210526315,22.3315963740976,71.3157894736842,22.253704608369976C72.89473684210526,22.17581284264235,74.47368421052632,24.059463713835964,76.05263157894737,23.296694349454484C77.63157894736842,22.533924985073003,79.21052631578947,18.85591380339792,80.78947368421052,17.67708842208109C82.36842105263158,16.49826304076426,83.94736842105263,16.06605873093416,85.52631578947368,16.223742061553494C87.10526315789474,16.38142539217283,88.68421052631578,19.660478749389352,90.26315789473684,18.6231884057971C91.84210526315789,17.58589806220485,95,10,95,10'
                                    stroke-dasharray='111.63772583007812 111.63772583007812'
                                    stroke-dashoffset='0'
                                />
                                <circle
                                    fill='#ff073a'
                                    stroke='#ff073a'
                                    r='2'
                                    cursor='pointer'
                                    cx='95'
                                    cy='10'
                                    style={{ opacity: 1 }}
                                />
                            </svg>
                        </div>
                        <div className='svg-parent is-blue fadeInUp' style={{ animationDelay: '1.5s' }}>
                            <svg width='100' height='75' viewBox='0 0 100 75' preserveAspectRatio='xMidYMid meet'>
                                <path
                                    fill='none'
                                    stroke='#007bff99'
                                    stroke-width='2.5'
                                    cursor='pointer'
                                    d='M5,38.75346034847744C5,38.75346034847744,8.157894736842104,37.78361287521033,9.736842105263158,37.265917602996254C11.31578947368421,36.74822233078218,12.894736842105262,36.16403408782501,14.473684210526315,35.64728871519297C16.052631578947366,35.130543342560934,17.63157894736842,34.95386202030071,19.210526315789473,34.165445367204036C20.789473684210524,33.37702871410736,22.368421052631575,30.58147424415133,23.94736842105263,30.916788796612927C25.526315789473685,31.252103349074524,27.10526315789474,36.06239483254627,28.68421052631579,36.17733268197362C30.263157894736842,36.292270531400966,31.842105263157894,31.812544102480597,33.421052631578945,31.606415893177008C35,31.40028768387342,36.57894736842105,34.73253541768441,38.1578947368421,34.94056342615209C39.73684210526316,35.14859143461977,41.315789473684205,32.74154589371981,42.89473684210526,32.854583943983066C44.473684210526315,32.96762199424632,46.05263157894737,35.99780166096727,47.631578947368425,35.61879172773164C49.21052631578948,35.23978179449601,50.78947368421053,30.852195625033932,52.36842105263158,30.580524344569294C53.94736842105264,30.308853064104657,55.526315789473685,33.04551375997395,57.10526315789474,33.98876404494382C58.684210526315795,34.93201432991369,60.26315789473684,35.94935678228302,61.8421052631579,36.24002605438854C63.42105263157895,36.530695326494055,65,36.45755305867665,66.57894736842105,35.73277967757694C68.15789473684211,35.008006296477234,69.73684210526315,31.743201432991366,71.3157894736842,31.89138576779026C72.89473684210526,32.03957010258915,74.47368421052632,35.065950170981935,76.05263157894737,36.621885686370305C77.63157894736842,38.177821201758675,79.21052631578947,42.07145958855777,80.78947368421052,41.226998860120496C82.36842105263158,40.38253813168322,83.94736842105263,32.840335450252404,85.52631578947368,31.555121315746625C87.10526315789474,30.269907181240846,88.68421052631578,34.09230309938663,90.26315789473684,33.515714053085816C91.84210526315789,32.939125006785,95,28.0955870379417,95,28.0955870379417'
                                    stroke-dasharray='118.6064224243164 118.6064224243164'
                                    stroke-dashoffset='0'
                                />
                                <circle
                                    fill='#007bff'
                                    stroke='#007bff'
                                    r='2'
                                    cursor='pointer'
                                    cx='95'
                                    cy='28.0955870379417'
                                    style={{ opacity: 1 }}
                                />
                            </svg>
                        </div>
                        <div className='svg-parent is-green fadeInUp' style={{ animationDelay: '1.6s' }}>
                            <svg width='100' height='75' viewBox='0 0 100 75' preserveAspectRatio='xMidYMid meet'>
                                <path
                                    fill='none'
                                    stroke='#28a74599'
                                    stroke-width='2.5'
                                    cursor='pointer'
                                    d='M5,41.40937957987299C5,41.40937957987299,8.157894736842104,39.708109428431854,9.736842105263158,39.51717961244097C11.31578947368421,39.326249796450085,12.894736842105262,40.21535580524345,14.473684210526315,40.2638006839277C16.052631578947366,40.31224556261195,17.63157894736842,40.046273679639576,19.210526315789473,39.80784888454649C20.789473684210524,39.5694240894534,22.368421052631575,39.19801335287413,23.94736842105263,38.83325191336916C25.526315789473685,38.46849047386419,27.10526315789474,37.69432231449818,28.68421052631579,37.61928024751669C30.263157894736842,37.5442381805352,31.842105263157894,38.55398143624817,33.421052631578945,38.38299951148022C35,38.21201758671227,36.57894736842105,36.54589371980677,38.1578947368421,36.59338869890898C39.73684210526316,36.64088367801119,41.315789473684205,38.61002551158877,42.89473684210526,38.66796938609347C44.473684210526315,38.72591326059816,46.05263157894737,37.47109591271779,47.631578947368425,36.94105194593714C49.21052631578948,36.41100797915649,50.78947368421053,35.64443901644683,52.36842105263158,35.48770558540954C53.94736842105264,35.330972154372255,55.526315789473685,36.22482766107583,57.10526315789474,36.0006513597134C58.684210526315795,35.776475058350975,60.26315789473684,34.507409216739944,61.8421052631579,34.14264777723498C63.42105263157895,33.77788633773001,65,33.516663952667855,66.57894736842105,33.8120827226836C68.15789473684211,34.10750149269934,69.73684210526315,36.172583184063406,71.3157894736842,35.91516039732943C72.89473684210526,35.657737610595454,74.47368421052632,34.56440319166259,76.05263157894737,32.26754600227976C77.63157894736842,29.97068881289692,79.21052631578947,22.422786733973837,80.78947368421052,22.134017261032405C82.36842105263158,21.845247788090973,83.94736842105263,29.081582804103565,85.52631578947368,30.534929164631166C87.10526315789474,31.988275525158766,88.68421052631578,31.32144601856375,90.26315789473684,30.854095424198015C91.84210526315789,30.386744829832278,95,27.730825598436738,95,27.730825598436738'
                                    stroke-dasharray='107.71658325195312 107.71658325195312'
                                    stroke-dashoffset='0'
                                />
                                <circle
                                    fill='#28a745'
                                    stroke='#28a745'
                                    r='2'
                                    cursor='pointer'
                                    cx='95'
                                    cy='27.730825598436738'
                                    style={{ opacity: 1 }}
                                />
                            </svg>
                        </div>
                        <div className='svg-parent is-gray fadeInUp' style={{ animationDelay: '1.7s' }}>
                            <svg width='100' height='75' viewBox='0 0 100 75' preserveAspectRatio='xMidYMid meet'>
                                <path
                                    fill='none'
                                    stroke='#6c757d99'
                                    stroke-width='2.5'
                                    cursor='pointer'
                                    d='M5,44.57254518808011C5,44.57254518808011,8.157894736842104,44.57729468599033,9.736842105263158,44.561146393095584C11.31578947368421,44.544998100200836,12.894736842105262,44.53549910438039,14.473684210526315,44.47565543071161C16.052631578947366,44.41581175704283,17.63157894736842,44.212533246485364,19.210526315789473,44.20208435108288C20.789473684210524,44.1916354556804,22.368421052631575,44.40156326331217,23.94736842105263,44.4129620582967C25.526315789473685,44.42436085328123,27.10526315789474,44.25907832600554,28.68421052631579,44.27047712099007C30.263157894736842,44.2818759159746,31.842105263157894,44.45855723823482,33.421052631578945,44.48135482820388C35,44.504152418172936,36.57894736842105,44.4129620582967,38.1578947368421,44.407262660804435C39.73684210526316,44.40156326331217,41.315789473684205,44.45760733865278,42.89473684210526,44.44715844325029C44.473684210526315,44.4367095478478,46.05263157894737,44.35881778212018,47.631578947368425,44.344569288389515C49.21052631578948,44.33032079465885,50.78947368421053,44.329370895076806,52.36842105263158,44.36166748086631C53.94736842105264,44.39396406665581,55.526315789473685,44.545947999782875,57.10526315789474,44.538348803126524C58.684210526315795,44.530749606470174,60.26315789473684,44.36926667752267,61.8421052631579,44.31607230092819C63.42105263157895,44.262877924333715,65,44.19733485317266,66.57894736842105,44.219182543559675C68.15789473684211,44.24103023394669,69.73684210526315,44.41581175704283,71.3157894736842,44.44715844325029C72.89473684210526,44.478505129457744,74.47368421052632,44.429110351191454,76.05263157894737,44.407262660804435C77.63157894736842,44.385414970417415,79.21052631578947,44.361667480866316,80.78947368421052,44.31607230092819C82.36842105263158,44.270477120990066,83.94736842105263,44.14414047657819,85.52631578947368,44.133691581175704C87.10526315789474,44.12324268577322,88.68421052631578,44.24672963143897,90.26315789473684,44.25337892851328C91.84210526315789,44.26002822558759,95,44.17358736362156,95,44.17358736362156'
                                    stroke-dasharray='90.05068969726562 90.05068969726562'
                                    stroke-dashoffset='0'
                                />
                                <circle
                                    fill='#6c757d'
                                    stroke='#6c757d'
                                    r='2'
                                    cursor='pointer'
                                    cx='95'
                                    cy='44.17358736362156'
                                    style={{ opacity: 1 }}
                                />
                            </svg>
                        </div>
                    </div>
                    <h5 className='table-fineprint fadeInUp' style={{ animationDelay: '1.5s' }}>
                        Compiled from Nepal Health Ministry,
                    </h5>
                    <div className='MapExplorer fadeInUp' style={{ animationDelay: '1.5s' }}>
                        <div className='header'>
                            <h1>Municipality Name</h1>
                            <h6>Here are some details from your nearby municipality</h6>
                        </div>

                        <div className='map-stats'>
                            <div className='stats fadeInUp focused' style={{ animationDelay: '2s' }}>
                                <h5>Confirmed</h5>
                                <div className='stats-bottom'>
                                    <h1>12,141</h1>
                                    <h6>+395</h6>
                                </div>
                            </div>
                            <div className='stats is-blue fadeInUp' style={{ animationDelay: '2.1s' }}>
                                <h5>Active</h5>
                                <div className='stats-bottom'>
                                    <h1>6,379</h1>
                                    <h6 />
                                </div>
                            </div>
                            <div className='stats is-green fadeInUp' style={{ animationDelay: '2.2s' }}>
                                <h5>Recovered</h5>
                                <div className='stats-bottom'>
                                    <h1>5,043</h1>
                                    <h6>+239</h6>
                                </div>
                            </div>
                            <div className='stats is-gray fadeInUp' style={{ animationDelay: '2.3s' }}>
                                <h5>Deceased</h5>
                                <div className='stats-bottom'>
                                    <h1>719</h1>
                                    <h6>+25</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-right'>
                    <Tabs />
                    <Search />
                    <table className='table fadeInUp' style={{ animationDelay: '1.8s' }}>
                        <thead>
                            <tr>
                                <th className='state-heading'>
                                    <div className='heading-content'>
                                        <abbr title='State'>District</abbr>
                                    </div>
                                </th>
                                <th>
                                    <div className='heading-content'>
                                        <abbr className='' title='confirmed'>
                                            Confrmd
                                        </abbr>
                                    </div>
                                </th>
                                <th>
                                    <div className='heading-content'>
                                        <abbr className='' title='active'>
                                            Actv
                                        </abbr>
                                    </div>
                                </th>
                                <th>
                                    <div className='heading-content'>
                                        <abbr className='' title='recovered'>
                                            Recvrd
                                        </abbr>
                                    </div>
                                </th>
                                <th>
                                    <div className='heading-content'>
                                        <abbr className='' title='deaths'>
                                            Death
                                        </abbr>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='state is-highlighted'>
                                <td>
                                    <div className='title-chevron'>
                                        <span className='title-icon'>
                                            Maharashtra<span
                                                data-tip=''
                                                data-event='touchstart mouseover'
                                                data-event-off='mouseleave'
                                                currentitem='false'
                                            />
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className='delta is-confirmed'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>2078
                                    </span>
                                    <span className='total'>37,136</span>
                                </td>
                                <td>
                                    <span className='delta is-active' />
                                    <span className='total'>26,172</span>
                                </td>
                                <td>
                                    <span className='delta is-recovered'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>1202
                                    </span>
                                    <span className='total'>9,639</span>
                                </td>
                                <td>
                                    <span className='delta is-deaths'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>76
                                    </span>
                                    <span className='total'>1,325</span>
                                </td>
                            </tr>
                            <tr className='state'>
                                <td>
                                    <div className='title-chevron'>
                                        <span className='title-icon'>
                                            Maharashtra<span
                                                data-tip=''
                                                data-event='touchstart mouseover'
                                                data-event-off='mouseleave'
                                                currentitem='false'
                                            />
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className='delta is-confirmed'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>2078
                                    </span>
                                    <span className='total'>37,136</span>
                                </td>
                                <td>
                                    <span className='delta is-active' />
                                    <span className='total'>26,172</span>
                                </td>
                                <td>
                                    <span className='delta is-recovered'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>1202
                                    </span>
                                    <span className='total'>9,639</span>
                                </td>
                                <td>
                                    <span className='delta is-deaths'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>76
                                    </span>
                                    <span className='total'>1,325</span>
                                </td>
                            </tr>
                            <tr className='state is-highlighted'>
                                <td>
                                    <div className='title-chevron'>
                                        <span className='title-icon'>
                                            Nepalgunj East<span
                                                data-tip=''
                                                data-event='touchstart mouseover'
                                                data-event-off='mouseleave'
                                                currentitem='false'
                                            />
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className='delta is-confirmed'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>2078
                                    </span>
                                    <span className='total'>37,136</span>
                                </td>
                                <td>
                                    <span className='delta is-active' />
                                    <span className='total'>26,172</span>
                                </td>
                                <td>
                                    <span className='delta is-recovered'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>1202
                                    </span>
                                    <span className='total'>9,639</span>
                                </td>
                                <td>
                                    <span className='delta is-deaths'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <line x1='12' y1='19' x2='12' y2='5' />
                                            <polyline points='5 12 12 5 19 12' />
                                        </svg>76
                                    </span>
                                    <span className='total'>1,325</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewBody;
