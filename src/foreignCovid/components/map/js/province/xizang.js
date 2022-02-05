/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西藏', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":540100,"name":"拉萨市","center":[91.132212,29.660361],"centroid":[91.091762,30.037072],"childrenNum":8,"level":"city","parent":{"adcode":540000},"subFeatureIndex":0,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@z]V_hM\\GXt`hMrtbHNd¨pCdWŌlZT^L²jFCjlE~~tBnd^p lLMÄNtKziZDpYx@rp~TÄpjrSrRBON_bGXblITaJJfzGv`bKVrzRªKd[h\\¸OV[Ijk|NYhhh¦Y^L\\hnOJl|pLZ^W\\FXa|^hCkrDn\\R`JkEIioc[Hm snÉ^UNNpKTT^F]rBvrWVhdpDR`gLKZjZBV¢vnYVT^@J|x`^nQdqbwP§MLÇpBS_»bk~d_@Um]SoÏmBW[½fqLa_m@O¦yfJvVKOGPfUT`gTqSa`Cdl@JpbVs¯ÀË[~JhOrsEs¥eqILayVFP¦Q|[J]bAÐeVQJRÉ^Sk{H£ecZsF[^gSOgbeaa[dW_ywUÕVpi]_LB~}TzPWOy{CUogÉ×¹ƗédiyUÍ³F}}VEoYW[L{SmqEif{B{UMoQÁqcDqoIw©Iw@D}]]RYZyKwdgFmDwMYm@ÅlD_]}zncyHQÏgVGRsWK]yosaQx_F_Y[{AGad[@^]S®R[_ĠJtR¼EdHbOxDv_Fðq"]],"encodeOffsets":[[[92518,30011]]]}},{"type":"Feature","properties":{"adcode":540200,"name":"日喀则市","center":[88.885148,29.267519],"centroid":[86.477854,29.498529],"childrenNum":18,"level":"city","parent":{"adcode":540000},"subFeatureIndex":1,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@]fIS\\\\[\\ctz_aQ_Cx_FscPvKYiUejfYG©P]IcuBkX{_FaWIpMvaOYeRoE]ÃD}NcyuKczkI_V[OBg¯J[XĉT¡QSuwYCusiEi_fUbPEdXZDv[ru\\oHOxiR¥PAmX[[L]byDMy¾qCkc}RIZHaLklmY^»«cDjIvH[[abiEY`Vv{R`hNxvbxeDYdiOURgS\\]QGebGLf}aAXkpDXbGàxmz[|v¬E¶IbeZAg}wSGUWqy}W{@K]mdJVflddO´fnbH·R¯AëÃBY|`AbGe\\gG[Ghi_ª@Q^CÀFPGkSFkUsgMBYAxzPMZÏCoaLivyFep£m`Kw@[|iE{id¯ri@uXceCcëdjwQucSLoclDlÃWVVhYt\\u\\\\ctEb~qlGneHiaRFlW~@¤[~CxN¡nlÑk½QnyYK@g]]sN]_JYMk}[RiWeLPhÛOWO~sNc|`OS]K{fCwJebBfeEVSÔF^¿^Y¿@hTBhqG]ZgjUWDycSqmYD@[s`ExáPSY{X[v]GAÃuYQOeKB]mm^U`u@MF×sC°qNW[omLoK_sN@oqSuEd}GcoUyE_imUxkLMYeHKrbu[E}^ERăÌ§ÊqJg`NrQX³G[biOyZIp\\pQtAP°Ud}nLuRqCCxgfH`_\\EnWVCmVSE`onGncp~\\G^^LQXdBZlH_\\XRZDKTtChTXrF^èÌKV|h~[KSbbnEnwjCTUc\\dcTX¬i^G|NXQjTZ]dN«pGrç]LgCx\\DTCEZZn¤Lv^RpXEclP~|CnfvZ¤PxRAgV­DqXNbazCnzeF{uBubsJqrQ\\c_C[lD[qqKW ULK^sSeLa_LoUSYqTyre@W]oUoquDySqAN}gk\\g£xaB¥iq^gDÉI¡Z[OJ]R{HulWhPnzY§ZuCe¡GeaNMousUSLqW[}PX\\eXoGkX©_\\KEaxVAmeMQuN©QNmdE]g@^xD®[d]_Cd^KybiSKaXW__HeRoEui£FuOa[©RreL_|lhv[G_[Fktm LdUAX_FÇdcąm_«ña@fQr¿SWdW@pzpIV«TyFgÖzawhWyuONOSOida@¡aqjsUoYOAmkujAY©GgyKVeOW«Uy|o^VubFYWyVGuWHG¢uQuFUhoXqsHZu]iBm{ß³ys[@ujQu{NY_wH[®C^L]zknT^T~Wfm_puZtIVqcgA^^AxkNgkSeVKxJxEZ Y\\{²BVR¦VFd[Rvcdokf~MJi^Kj^dIRaY^]eMZUfNr_DqAZwIfSReEoboxKHS~{Aeri|DAafYlDl[bJXºA~LClxvtEn\\bW^VpBdWCkpGvTpWhRlOBZ_Ô@I{u_GsR__F|JreI£_GVaLhceTPÌYGu|GE]\\sE[rR¦FY|Ccf~QC²qhBìhpFQjJ\\t¾À~IjVzWhqrE`oW}LoeM{UkiP³Zw_XY°Qz`q|à^@Y|UDbTÆOgSCXCd¶^FBJfÅH^ Y`Sl±p_D¡\\]Æ©}¥¬{ªM¤fnHB^]ZSg|NEGXzxDh^JVncOFqZyATk^KxPvQTcdETbHi~InYnkNj`IhxJjjFV²~EZ}@^nR¢WhicoNYYOTjsUT}M²CnkhOfVQZQr[®IlvbLIj[Cxj|\\`_qONSIx\\¸RdhnERWPvC^fDCuºEfzzJ~A^lFbWGcfODWn]°dr]|Cjit\\afdJnZD ]VlVMbTZwpXB¢nS^HXfVTpLlUjAV²pCTrjô@¢¥pKT_BÙf@dLKgg]C¹TQGgaYDWgwgBsuaEZ^U_¯xA]dEXq|FD_fCQ«~WXObVÂjJ¤zPRlfcdGl{zYAq\\È\\hpDndfb|¬hTKr`r\\|HdÎød`LSn~dr~DbxZL¼JVX¢Q`^XL`SX^`@l]vIÐPuZobCvf~[hvBjAlm\\Nv¶SXH|Ý@_SUZJpmEgpHrW®bV\\MÂQxef}J\\hDVthFRrUfdnbQjG¶RzeRJpXPxQjfLnpAxgL|\\rlF~XITdVïrEu`wCaPcG»FsQğI`Q\\­T]^@c\\Hb|BZ\\E`w`bRpt^zXLQtUHÐhGRzmdy^~C`k@ÆZnxNnC"],["@@^¡lAØ]ZvYpu~WL`\\enAJ~WJKvG¥h±T@"]],"encodeOffsets":[[[92057,30695]],[[87819,31695]]]}},{"type":"Feature","properties":{"adcode":540300,"name":"昌都市","center":[97.178452,31.136875],"centroid":[97.035183,30.783725],"childrenNum":11,"level":"city","parent":{"adcode":540000},"subFeatureIndex":2,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@HT]¡VMhfcMtNPu¢@`LHXzX`fE_\\S^h]^SZo\\EtH YhdrjOAUfed¡GsX©CmtohTrQtPBb¤VK]GbIpVFrLTf¬D`[ehgA~XLDp¢_\\fFdZlCFbm~OncNNdOlQæPFSLd[VIPGl]fHúf®IvhPxXVJzVTaRFfW´QPT´L\\ubM|XtclMvdtI[ZJjKnNnWzFri|Bf]zNlWjbjifBcD`pJLZpNFVUV{nChkNOjËK^nR fEfk`Eg^]j`KTm@[ZfXFdaPGxZ¢rªInyh]\\uWvx\\rpKjnO^aD}dBP§WhrFYVF`{@QaABfm`JV{LXrwJ^|XWhZdKNVh@j·¤}\\W\\MvºebmPBpVLm´Vnkd`oHUlkQiN|]BYp_Cjo@MXNuEaXµDOf{AWZ£OqP[[NUGwVIUkZqHQU}Jy\\Sv_bYAWa[`]@]qHobF_UeweQqxInYlHgQmbSMm¡ysrsLgOc©IYuXuEaSi^i¥Ieew@aiEsVekVIcT£Bmf£IocZohQou£xIWsKN{eJWtj[MF[XWWn_Ik`hMTqtg_oMJuFi`s`OHo_]C_qk@}ZoDMecJ{vqlOX±tzAdq|O¢UtiJYO½FTo{EtuWgII¹ªsOcOoOFsisUNIY~JjIYbuEGZPeXµ²HbSZÁFiI}U}WKNmymlW[`\\aAÅ`J[_g@Ii}OVSpmnkJH^k`ÆDlVF`U^bfAXhXCpPvDdVQ²WNL]DencHoSBqkFKI`mP_nVLaVOaDuDOsy]QKSsIuh@fbrDdR@ZFi`YAUwSMN{O@`oE@W¥EKOefÍxO[qHUOVQ[jQSZVkuLcWCqsPcMYNqK_ti`EYK£c}c¹I«fcGuzQA]`D±s]HTcºa[RYZ¿OYwE_mMC~PMXqUO\\bKÄEejOusoQw`cslRtiHk`mSmHab[Rj}^SWyiE_WZDOgiUA_WiJ@i]EKmaVkGa®FÞp AhxpQriE]__[D_dIzebH`ljYn{K]_cG{eeU}Rw@NiqOQggG¡`Fe_sCiVoýsV¯`p]mÇoGRc`«Em_mG^P£@mPKoocLw{PQ`}BMP[ZuFWT¥SSm{`aJtKlyL_Mls¦Jw~DP_LslN^Kl{hJJYUIY²i`\\zCdt``pZ@¦S@TY°CZT@hlH`ipKÈG~NUbbDfvA\\[´_jÌ_dgBdVjMpkdKZXetL|fp@Ê^LJpR¤wxKkkD]v_bc\\VBlOXRCvªEi\\jc|Yh@WEhqi¥´sR}hwKfUqkTo¤q@]d]DvYlh@XcpRXOBkZepER`An\\T¶¼t¨\\S\\tUWQdulYl^bK`zxQN]p[KS oGyR{Kg}Y@v_C]y@cqwGgVeEiw__mB]o{_Kuf¡ve|AfaVrGj]d«XiOygsE^atOvufUhoGeiSµ\\]]wB}l@@e¼\\¥^QzPjE`T Ujan@IuXQvDC´Jdf^n[nJH®M\\ThDzjCrbR^aÌLjZYNZUlXpn@CÊ½Abbv[bNGYkc¥mOP_ScpeRe|F@«l£a­AgTà\\~bvEHT{~l¨fNj[vaLYEnZkvHlgªkLeyHc~mCWlwbIÜHjMleD¥lOfNe]KshmfdWA}jPK\\ptnsqByXXaxC\\iPr\\`Yv_V]D»lUp}[gBc¢dUzF¦u"]],"encodeOffsets":[[[101054,29118]]]}},{"type":"Feature","properties":{"adcode":540400,"name":"林芝市","center":[94.362348,29.654693],"centroid":[95.239298,29.198982],"childrenNum":7,"level":"city","parent":{"adcode":540000},"subFeatureIndex":3,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@EM§qVGeSsA[WqB[Fi[QDágCWNqSac`¿SgjeGg_³Hg^iCÝr{lCdNJhÏÀ¡AxwCGiuk_ePecX@jUTXWRGhF®RY]³|kASUBwYR¡[SQgn_Pa]UAqLMGX[O^YCiAiZkINgKsF}MMRc]mw_I{]@SUmZ¡uAUiYLYhKQ_oCcUgXquqA^]ESLSMoVMÊ]tmn\\GpdJjlFI^g@^_zT`GE©pwe}wyE§W[TWJlbTBv~ t\\OIhAtlfJI^trAhndUzGVWgpyUUL]lcZecGlqAl][qeOBkmH[Á§Q{sEqS}}e]ÅYyTcusBuc_oMig^oQVYfW[aLmlyqV°£bL`pNhn^@j_ªg`WNRÚaEpsHe GdHL~^p^nQNNrpTXKàUJØI®pĂDf\\ML¸YC GRhE~TpMHeÆX`CrxhLT}hALudixWPWwXq_]X{FfkUªGDPm§ WJSaVqOYL]qbST~]vD~iÏA¡z_}£Oj]\\N`_kKÛµec{ZWLmf[rv HzM VGb KŖ®¤zÒllÎl¾¦ÊªXĘ¨ÐtppfrpfÎthèhÊxòÆj¢IrlGjNtgPzA¬M¢BthÌG|J|\\¤DVYCuZ¡ÖoDGzzXxOXXVvCFWzEnk]^tNWn[hClvE\\YApV|Mar}TmnPr[Ke\\~IPXHT|V¶n^_@aM|Z[lfR_TD\\vlhabcB@µQ]fLb|bWnPV¤a`Jp¢F``Wvj`{lVWtXR~FLX{dGbPLdMdj`]vDp\\B¢dBXsfCdbzAnURelIj}BÏ\\efE¡`LtKNln\\DjowEcO|Ytun`MN{lKjeV\\tTK^ZMV\\\\iO~{lDzjUJlP\\bjSFsdWGmjybIn@MohgA¥VS|@|tLjM|¤J_L\\|bAlCºRlxVN`YXk[HBhkn¥vyEcV¡Ad\\ho~kV¼CU^`u_Zq[O[jwDWbWAzrmtos[LiOB~cXegnLtf^eMkPC¦fkNiÛGaJkxDX}nGdzKf©lkhuGlmYFZbKui\\eMk§|}GSuF}aß[SBhb®k¤@¬{EQfofTdO`nP¦dZlHaMu\\aaBÉ¾Dm@WoVkMYZYKibËQ]aDqiCySgN[G­mIm\\e]IcD³uCWRJvm@ibV_SiFyO]R¦[»@fk@~xA^^¶[jTHfgpeVuvsP]btFhPzWjc¬i^qHUeb{Bufe¢Lv|`pA^`nx`FjUfHh xdr@zD^u`@~ZLhQ|HzpLTo\\M^wR_yaLk]kZcvXRsV[T§[»sSµm[BQ_oFYfAlWPoQWdg@kuZCc^@^£rSprleVLgxQ~³tj¦grFXg@{Zid[j©FDuWQPAk[Uadu`C^llwL£xQIo]KÉ@eoK{fsYWLcoliNcUAchË`i³`[\\uBeCaaV}MÇHoL_jkG@gYS¯DSZ@¥TY@_o_csyD_["]],"encodeOffsets":[[[96414,31219]]]}},{"type":"Feature","properties":{"adcode":540500,"name":"山南市","center":[91.766529,29.236023],"centroid":[92.266609,28.303935],"childrenNum":12,"level":"city","parent":{"adcode":540000},"subFeatureIndex":4,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@UcJSW}kE[qK{hBwmoeKRiOwoWIfQQyµHiaRcmVeQqgEsCUg[~IfeRwNÁU[aX­GqhonFIoVY`TÞ@G{TWuµM[vcC¢RXkdEbw¬Dd_rEd°cpozlhD¾m[ZLV}kMV^cUÆ S@RbOlrOd²ngjfdp`EjvF^_ÞPW|BFcl[E|QkFeXnSZkIY£@]KW}QJZ]ZO£Ws©QojyasfxS`kCT_qI¨fR¢MºeÂVX`Uxz¹·QguUymHQ[D\\sWVwb[DahoUFsO¡ö^ôn¶R¾Düf¬jPÐFbIü|OĚhò_®]¼GĺvŔ\\ǚd¶dh¢zZÐTthHtFĈZf¸ºÈÚÎ®ņĴvxe\\KnYXd|fÜ¶lL_`[Mi^P~¤y`B¢Ð}juC}^SaT^rKPZUrTbIX¨OnC©HVelEW|`^WrXxOwXcjKvgBS~gKwq_DÅWGfoN}SgFQHD·ZK[NeāC­o×JIßVWLoSqMMmR]]oK}cGHGfotFÙbMQ_X©hi`]@gmM_oaK¯¤UrznkbKX\\ZeUpR]jhN`pvdtAvSdZz^Æf~~rTFtR|Â¨\\GlnAfP\\rk^BkrHfdYkdK^VVozhUXyHcVgmqB]sJeIskBgJPs[}AuaSIkXSX\\F¨xzf~oxFª_HyS]`@]h_[QCmlqD]gb{EW[]XKY{oIkmP[g]K¥ZgggZ{MilJU\\·Pg[c\\©LyQUqaLu_yHIeISbkJWaaHM`PAqQqToiÃ}Sqow@oZYCyjsLÃMKNk]omcsA}}kFDiiE±KS]YŋkcXD§oMcaGqsgNs_WH[gNU`y^"]],"encodeOffsets":[[[92518,30011]]]}},{"type":"Feature","properties":{"adcode":540600,"name":"那曲市","center":[92.060214,31.476004],"centroid":[89.24948,32.783399],"childrenNum":11,"level":"city","parent":{"adcode":540000},"subFeatureIndex":5,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@Cb`RwJOxib{@DV©ox[SQmJUyAuLoQY\\UGB{S{SIcLW_y[V¹YCc¡^UMLgVYO]u@ak\\S`NikiE]dcGgt}O_]_VyBUSBlStmTIv¹lRSyD{¡mc_iBeU]xqBCpWzcLGw}TJnS^Po{M^_sDSS}SaJeLhoREgLcegOuLq_LC[¯SnVoZiWWZ]IS`{S@eVeAlc¯bD]kU[XkASgQkdWIojV_TfFhs`@T©PIV}O[]Å@[YD]{BOUGabcybFlKiwN[YcHwneDS\\LeT@\\år{|LRqr©JkYGemOU^i@h½P§}B__gAQg[Pss@_]D½[snËIaH_USucOF·xKå¢xxqJ{lëIcbkJ|ñĨs\\Fãj_RQ°SR©\\Gzb OV`fu^Dp`AKdd^\\rOXsCK^mRQns`EDP^azwTSw_ZlRAtRXjhLQH|tE|dSnlVGr`Y|Y|_Gi\\F^qXhpJ_hTVKfDr@hdVHp[ZUIRcfXb]p\\VEf|NLT~KPtnfGR^aVI\\ZREnhcbUWsCHTFJ\\op`ÌQT\\VRFUZHi\\_gjSnq`P^xd|Tbfm@]\\lajLd~E^h@|ZvUhxjFqriKi^EbholYfNO¬XnEj~JD^[l\\RJt`^o\\ES¥AVqEkLwGebTP©laEbM^\\jQ^Rv}pZxnYSHTFXH`bH|loX]I[VkBibébkPÃ ¥~RKiF[g\\Kb¥\\QXV£F_VmmE[LcKwYc_BgfmPJVerk\\ÇlKijqZ»_[@ifOd¹QTkMReBXCgiJmcsOPïGoN]QSi]åSNIUKV[ÛU£e«T¡D[HlyNGRYsN[usiQĉSoWyD{X}[¹Xse_AqqEcZYtsQ»J}G_skEQgBC[¡QÕHakDy\\yYCEJ@Qi³QASohuAacCOkmGcsGGg_@iuMgmOvkJizATxOSqoeJQerWOiC{P{jbS¥EE}QkWpmPmSFy§isB}¯oKIO£w³uymiBofieKmkIN]MªgI nvUPe@uuYoEwHÇpvedM@¯{Qb[|¯E_iA}Pµtk@fPÑQx`{dO}MwOw@_AqiwI¥w«gMBo]MCVUvI°`ÀQAewa]eorkIi[i{\\kakWyNYDQ¯WS{D¹kMi}gYakŋKc÷{Oo©kQ£\\ym¥UOÇa[UaFiskLçS{sguFuZuotuTÇOungJ]aQyVOEwZiMsryXCbv@peYBmleHkmhPvx¢_CiB[fHÂkW~HwjMVSSp]E~wÚIPMAuUA`_ÞQ~Y¾TVitWHeI¥H[tOLkk¢mMDw\\}@£X}EkbQjfGHmrka}Fds[[v[ZsUgUÄXCkdkpTKvdRixìcDddfvW@qjc°|jjF\\{@Lxn_¤fozEjubKDpYÐONwyBAZhNVtEllTHOED¿R]©@`gjHH\\[hHfa_B{AZìÄB°¸QaGemP³cckeIUncL^|@~XrzXV HxTh~BfYJaFµu«\\{nywHßWaCloBW~beKHaHf^R[hTVQjPZcfCawuMw_g|QUuZ_jFba\\\\GuJidC¼¬Z]nlkKbGJY~QldrDz½NzCa^\\K\\nWB¦OjQPwpGv[\\qCuWYFcOVaej`FtjDvZxTv¢RĊS\\W°IAh\\P`UlJydvLdz~MÄCF^pfQPZbNuoJbX`E|lWAdv^JªOZHefijVLZu Otd`EDw`R`byds[\\[T[J^ehExczLZY Q^^C~@JxªJxpCrrdRÂpN|V|AjerFTnK|X\\ZFp~U~EÎ´zVcjêºƘØhÊVpDz|PXOy~SA}`Kj^UoÖxV`zcX\\bbfaPhhT\\]tEdY¤f|GTlÊ]IQRfUBÏ^aI\\{RO¥EzUbKrJ¦ftFtPqIg\\}Ì°¿tUaIok@Dcb_rThSS_VOeHPLUIuzeP¥n@b`Kr¾eX\\nApÐ^TVn`@cl}¼aT`AÈoK¨NxOraNNE~LtMhlJjY BDj]Z\\PWNHKrVB^Obm`h TR¢\\QZAxTVlB´{Z^QE­HgXQ WVS@idWffO`vlHjxDw¢BÐ¿IgcMD|kÞqjDh]´Gh`fHhiÀT_bdrTMXhDâC\\REj\\rA\\XtBfTHU¨rFN±jJZVIZgIk|]LkMtKO`}CIx¥ktNK`zk sLI_b|Tn¦TXSvE\\YON~AR_|OxKpdLpnO¤@O]nHn`¬Fd_QpHnÈo^_U°tþpUDj`tEf¢_hHRhrPMjx@~QVf|fdH^`|LZmkiG_faJy`cC\\``^jFRqwoBgoEÝb­lHbULn^F@jjI`XBjVPhCXY`jFXz]Ti~Qa\\GbTn_nGlsjkQt_dRxtpPvi fÃFaL[VPWrN}ODN`nxFPZYÀQZ\\¹bSdGt^C²_B^yRHvedJ¬dº~dL¤Z_FsjL`MrZ NdtODrdX"],["@@oúuRgUYR·HkRiGsLY]H[_Di]YW³@²S¦gHLuXII}mB[f_XKv}ZoYu×^K_}XPÜPOgfKjX\\Ql~ZNI^`tM^^@hZLmzRl¾"]],"encodeOffsets":[[[97034,33311]],[[88191,31711]]]}},{"type":"Feature","properties":{"adcode":542500,"name":"阿里地区","center":[80.105498,32.503187],"centroid":[82.564653,33.063726],"childrenNum":7,"level":"city","parent":{"adcode":540000},"subFeatureIndex":6,"acroutes":[100000,540000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@U]_B[gUL¡KiMLkSmB[Gc[mMá¡UxAVáTÑbClafhVUZgO{ADWßsyAÃT·]kw«YáISOmWiHĉwAaåmFejGa«Wi[§qSSÅUÉkkkgCijaos`gKuZU¡AqKesM¿KWPď@kiKo`µSAn[JqO­lCJX«HfqyK©TvksXVwÂRPBsVKHÇFk^iIÃBOe¥yyd§dof¡JXiSoF`IaYGqWgBYI\\gsCu{]wL}wBaOGoiL£k{MaawD[urÑSo«siL_IwyD]¥Z{OA§uUCıDMJK[fJt³I^ReKmhUUcLiYyPcMC_sLkSWX_¥AY^sNIlyQaHmmRcSswEnm¿Ah}M¥lëUÑJDtuNOnuA}be\\_Y]^µVAxoE««CiQs§UÀ±D_~]QPwIQesOZkuUCå¯Vs_mmZa[iZkeQLoXGOeFmOQNwEMUhu£ùR¡Y@[h]B__U][kd{¹£ÅONqw£Ck\\oKhySNÍM_uG^«M_]yO§RcfKoY^wIEUqQZ{tqEquULsó__[EqiYwhWASgyauX©¡CcQoJHiY_FgWgPeW½|SKVQ¡lµó³MkzB]Ds~Hmv¤QslUZ`aE`]HmUcwtGpcHY_mGj÷bmt[AQªqmIgRWMeP[UgC~FhQx³]QBk_[Xw^[RUAsHc}cLSWuHUei[mDgoBe[GqV½K]Sk½KdlmDvyAlk¾l@X J~KfeEW[sMUkeI{oNOgqAYSuAesÙ]y~yvjEWczEqjMHgcoIqcciAc^GC]v£hToyPcoYaJYºsUoDWnMNiqoIcuK£wU}RWÇV`SxNRWs¯Y]sH{t@M{v`_ÂYLr`]Hk}PujUVmaFWobiHk`{¤aZDfRfQv³~@\\A[²\\hULjR²Bfd_RicJ[~nrJ`vnQzsQz^MN^EnmcmLUUhcKbgUaR_qrJoUL]gh@tbV¢e DZIhbWfJ®Sbi¸Y^¤IavsxCvgOlYzDpHjGgGgPm~£\\IH©j@H]]²M`RnY~NOp^FhnVIvsjLXD\\O~lFn|Yll\\y^RbCvTurXbO¾WVºRBcZNJxªmªeriAUAd_¤Y^XnHRZMpjlMxU_CU[L_pOJgztà´n|A^jYvtGrpWVgvEvRH¡XGHvzUZXEvaUp]z{¬VPXUfzLHhªBZilvBnZPVpitbr@¢cbPjTMPvPXzxgbyhÕEz¬SJUyo@oXXcÀTRqeb@¬òn`ĆcdEÈW`BcVKsnEl\\H`u\\gk{K`qfQ\\ªbvP¤EvjpFfQG``WXLbjTaLz]cD`c^­\\wC]h@F^ncMªRvMNRfBnwUFb[Lª`lWpHfWW[~O\\rXTKtVpvNbMf¢HDfYv¨ZyOmXgvk|G^QI\\P¢YÊJhCr]¦jbA¤whl[~hMrBzTvCprpVX^f@zqrSZVTKpb`fKtT]LVKXrL\\rC\\k`D[dRqIratAv|vfEyDmbyMarW®ChUBQw£OYueDm}{kOdFWQou]£KYmYFDSC[whDKè^Hq¬oM^cSYRiMWH{j]W«dScd[VDSxiFmamTa\\L}gU{LçËE]qSWDgsLSCQYW`[kGAYcRW]KH]}[doHmpmF_TnUDXUFm`[G_heDwrDvQK~mVcO¯BRs[oJozYjP\\a´HRWMqh_rI¨ÉĄËFQ~]\\FvaLqfGZNlKwnV`jzFpVHdc~FvrTp@tM`pLnK\\pMX¯rDØtEN@_v]Vnn^AfLPZRvBÄ^H\\uWZ|OTwâ_Ft@\\CnZTrdCzVXhiYH^grSAg@ZÀ]]ÀÓEUTFefaAIfxD|eLT^_P{MdtL`Bk]¢X´^Zj`C\\^GZtKjHlQ¸GZQhVvQpùÒKlPsG\\J¦GfsXUj½S}ZÝR_`BVBvONÙJ}xFo^TUTNiGx}XÁleGA\\jD¡`uwgOnGlkfAnZofu@aWDqzNtjYFxUPzbRI^mhPvSÈsvpYvEvvth|TèKtlEjb\\VÈbVP¦zn¤[RªlpPø|dŌLlZb~hNjºl|CXT°CRMZXzbl[lj|\\Jjqlfp^xbBf¿R¯_uJUVD^NApN¬h¦xxJrj`B@Pxx~NcP_|wROÒe@slO¶~B`jF{°a\\R|@°NcufoGÈFxZpv@vOfuVmJ©hNM^JlLnjfeApjznvx´P¤JLp°A~jt¨EzTOnonlXRF~¦FaTiO|D|jPqXRfIpfTrwPSyBIjulPnNhv@j"]],"encodeOffsets":[[[88137,36722]]]}}],"UTF8Encoding":true});}));