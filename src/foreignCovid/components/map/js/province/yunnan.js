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

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('云南', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":530100,"name":"昆明市","center":[102.712251,25.040609],"centroid":[102.87442,25.387092],"childrenNum":14,"level":"city","parent":{"adcode":530000},"subFeatureIndex":0,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@~f\\B^_RZ¾aTNSdtjWRnfELf]Vfpd_dCÀy|KXYCg]XU}glW¼zPxh@°\\jWPjML¼OVXt_lTVWJQXEsZUybqsB¥ºGpbDOrohHPfAb\\TDq^VhaZDx¡PUQC}w\\£CEo]P@zkRTlX`lFGnXJDn\\^q@m^ÄhzzYhVbvM~JPx[fZj]fbL\\_O~hfCXXkviGYbD|rxMdjp_bDbvanF^{UWpu[UPLUPgSmsTJbyU[Xg@UccdUbtAz]JBtQzp M`}z_~FneVdbU`vmF@_gFEd_BEraGqbNa~FcªCkÈDlONCwiwGRST[s[KÛC_xWu¡MiksQaoEwY_`reHTxtQz·vgASoēE«Çqs@YSOsXw^]E_ajmYL]UUgF][sBgdaWKDqOSLpKteKwP[aIKÃxsG]o\\SFekR_lRG`QEqbUDko@WueHcYajgeQkhYKsVWJ{zPNwKaFci]P_sQ}Pee_Af^@hYCa}VYEmrurRheCc_qE{R@}|UH{QsPiSCXK·QSTukKb}RYaBawiKggYDTyRDxqLgXDq[Ship\\rA\\aPbPN~r^`g[fpUrtGVimUtW¶XbYGeZS plOXh^cRQXzEXbdSdbXL||a~EnUPª\\QZ\\lDLldAd^@ndmZMÁOGAXO`dcaYY]·XEXYCrZC·"]],"encodeOffsets":[[[105584,25096]]]}},{"type":"Feature","properties":{"adcode":530300,"name":"曲靖市","center":[103.797851,25.501557],"centroid":[103.939179,25.705863],"childrenNum":9,"level":"city","parent":{"adcode":530000},"subFeatureIndex":1,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@JBHE@CNoyPOhuiU@ujOSqFMFumsP]][@]_¯vWaSUÛCklÇDd©Eb}MrabHFq`AFchE@`nEuV_cafUEm`}~yN_oRyAs^IByasVdcVdh@\\WzVIaSnthTVOKVOv\\Xo|VE]bmuCa`aioNcqwC{ZajHluWWeD}gP[`aK^eYi\\eOw}IuNUaZgyygÃn]r@[]CmWIHmkE_WSklQ@y^OFp¤Dx[D~VR¢OCwbYUgr]C[SBaeGOpgPqCoaH¦¹tArzaVtYFRWIXSU`kWsPUR\\dA^dtEjTYSNWmm|LUdNtUnaAAgvS^jtm}^Q\\wZA^wV@AyUX{UI wàPQRhceeNc~EpXf]º\\R\\¸HH¤dDnMEhzA\\fgbF|_b[@K|YvF}frpj¸nzE¸´ÐhH^r@ZpXBZtRYafÃLªL^TTnhbUlldlQVexqdT[fNRQtjZSrkOabsLeOu\\C`GSQiTJÀ}P¡OQgRbĸSMmT@]maxdjCURCjViWUboCGdcdA\\X´C|Nxyr|JzpOjfvOv_CGbpdLfvPpOjVpafF\\YpxO@TNlOZjthXp|XNAflTB^_dAmHSZLvok\\mDRon[KJYSqbI^TsxA^itmIAkc_K_oMoje[mNeMuNYXaE[XQusmI[PgWSNCOPDQ{HkIqhmCGp§NVmxZrC\\zKfcSqbIz]pD^lª`Q¦XfC`iZo¶sz}DkycA[cGbW\\ugdMOpiEuo§eHZwk{CcjcGm"],["@@IARG@DGF"]],"encodeOffsets":[[[105867,27377]],[[105872,27378]]]}},{"type":"Feature","properties":{"adcode":530400,"name":"玉溪市","center":[102.543907,24.350461],"centroid":[102.204123,24.138434],"childrenNum":9,"level":"city","parent":{"adcode":530000},"subFeatureIndex":2,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@KMRYjhCuWcsYO{uIVQW\\o[{UFEiqU­L^Bw{m]f]\\VZySaJW]loQ]`_HodDJtI\\S_^s_mxcFqs_H_S{mcFkiuNASEcOSTaOKdnyJOueD@\\oj³rqcSk}kKcqLUhHp]dD`aQHR`chcmPeIgie·go[CaRkv{HTkvWB}x{Cy]V}vkVslMho}kIaaXqlcD}cYLg\\IHo|RR|^B^jnIVRdUjGeqEK}vcZfjwhWJcrhfl_geI_cJ@gjDDc`kpG_fi\\JfafLuiqmFDq\\]vNaGir@zoBXn¾OhavT\\_xS\\Rv]RllL~zeN^ªA^O|Cb tjIFrolI|q|mPEWrXvvb¥Èp^ndzHZQhveBAWLwL^TDhTG`mCSnp`¸QiOQfQJnVrZdYxLhXZO]YrEXaYY`c[qNs`a`^^CBplljJ`@zXEMg\\SRuzLObnF`vrdxV¤bAJPGTf~|\\hªtE|b^Cho^ZªaJQf[CSdTÂPKjvRfDD¸qYDWZFW^¸ZZbd_cWPBPHNÂYcn@mc]cBKkkCY[[RO©Vm}Fb{K{aWTcacFWWyRdQ]WgkPoYTHfaZµWsXnVUjHqsVeo\\_hq]M}aObO[qBo[gj\\TrWCKhwrQCSzZChhjLbxbAZQa~lLSvRTL¸WTDOjRtG|{V@~Q"]],"encodeOffsets":[[[104681,25509]]]}},{"type":"Feature","properties":{"adcode":530500,"name":"保山市","center":[99.167133,25.111802],"centroid":[98.971932,24.97507],"childrenNum":5,"level":"city","parent":{"adcode":530000},"subFeatureIndex":3,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@gEhmc¹¥RuQwJ]v\\¤Q|VnklP`clP~oXQtbtmnsmEc[BoeZ~A¥³DqgqLSgWOeDOsgBUWcWm¢wb«JqPh©G[m}]v«K¥]uNAUc`YL{^WxENacMoL[qXfGpLZk_cKsoGf]Gc`Wlf`@|jXWJzSØDRsf^xBjXlSBlSy¡V}yIU[zUmZyuAWvChkB_bUPgS[RWhVhKnNjN_CNc]Mz`OVmKSpmXqWuRQmF^[RiDkQ}vYNLE¾REll|NdPPbtCpTdCº vdCzdN|lÁ@ibgQs@ÀWn^\\GrfAnf¤T|\\¨^JvOLrSb\\HeÜoTjbfBfxBGf@t~FR]~XBPfJ^|TyjLhpFvkzPbnZhhDbbzBvllFbcT^aRwA[QEjeeX]pDf]a@u_Lg@mÏCiYFWS_^oDut×rU\\Y{ª_@ySlgjTTS¢¦_TJGtXlwHdLvM{sLNkoOm|Zvm­GRÌ³RUwP"]],"encodeOffsets":[[[101262,26251]]]}},{"type":"Feature","properties":{"adcode":530600,"name":"昭通市","center":[103.717216,27.336999],"centroid":[104.00534,27.652533],"childrenNum":11,"level":"city","parent":{"adcode":530000},"subFeatureIndex":4,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@PMVÜTXb°u`@^^\\O^ntEvNrEPTviV@vjPgzOMpQHHniddDl|YxfGp¨FvojNPcvh[XadHB\\\\VIhmvbd[MvJH^¦hlI®î^BBbnEjpjKR¤V@fhBl|L~reKnTDZazWvs|Pj_EabrzOQdKTbYznrt\\\\\\@hzSPjp¶SLk¨k~EMSvAS[µ~Dti`GhV¦DL^P\\OfVbwfFhbEgMyl[`Tj~hÌhhhvOrN|[bHdaCq~hMJZ|EjXHZt[tWIpzQl^lQzJr_JE~JzerrE\\T^c¢`h`AbdF~]pDZmZcLaxbbBbe^mI^{Dg^¡MAys@[cHuqfeuMOmySÁCyaodÃgsNw_mV@^lcWYhyVaf§vc`Itmr{PydLNPKlbFnjLZbbFKXI|Nra^HXA]hQwRaMwuqRZ\\odoÂZVSX^Q^LheN@h\\PtGRNfvGX~hZ|APzi^}P}O{sefuBctU@UqCgRKm[C}pĭqKhwR[WkNAvm^aBiAyaMvjCenRoMunMk__gwU]iDegEMz~cF]aYigm¿_BAi_CwzohZdUDbevBlXKm_CGRe}gWmwYwoAg}mdaEaIRcQ[]IÕCykGqZ{w]mnMlUA½WcqBdkBX±]Á[cYnkK¥PZQ·^G|ÅOSvÁIkncGkLUOdd["]],"encodeOffsets":[[[105528,27179]]]}},{"type":"Feature","properties":{"adcode":530700,"name":"丽江市","center":[100.233026,26.872108],"centroid":[100.524919,26.939309],"childrenNum":5,"level":"city","parent":{"adcode":530000},"subFeatureIndex":5,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@l² dfvdFrhQrPlG´fTC¢j GJh|XRvqbVhIZebAv_MarUHZªGVLAhwdBZfdtVM^fPD`]@b]Y\\uCckV]_C@vln`Q\\xqpQdJW^cMuNYlRF@v÷hØWPtÒ@j©Z]]Jcn@t]hDzgdToVA\\¶L\\i|_DicBTÐ[HBxuOpxgP`hWX¡DMTKex¡Kj`cRDnmuWiJsBa¥[]S`sFMrQOk`NyuEqey_WEkoDMma[y`Ks]k\\MHePesQJ}kaWbkhOUxNKUyKme½cOpÃUYT_iµFoUK_}¹[LHfWXNfO^Lcl@\\idSreZGpdWorq^CbqlyRq_DK`rFZkhdvg~oZMp[VXpiJefOrP|c^Bp£kIW_M{UL}WaZg@pu__w£h­_zmG]Vk`KPcFReIiX~gNsXSHqJevQKiNi\\GSk`GOxÇFsjMjgjCxcZpIr^ToÊAArhEvcN[]pYZF¤rK~rBn\\ÌTB¯®X@iXO@Kuf\\XqKoCXwDMsvu{@]SdBgfL~]BcDebBm{mSUad[hÓ\\U{gNz]dPno]UL¿RqzCPX_Fq°bEaK®fjPnZPfdEZHepQ^_|C^^"]],"encodeOffsets":[[[103332,26795]]]}},{"type":"Feature","properties":{"adcode":530800,"name":"普洱市","center":[100.972344,22.777321],"centroid":[100.722321,23.188037],"childrenNum":10,"level":"city","parent":{"adcode":530000},"subFeatureIndex":6,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@mH¥{PWxe`k~|Ipm\\YhOªYRk~¸sfC²CKls¯T[UvEnu\\VKZ\\YO·L_VC`ÑEkqYAGqhWE]Á^A`sHWbKYseOmF¡KLYJOuVWP±GqÍcY¯[Rug`GmZiJfsUmCM_]LQc\\MWkP¥Y]~cRaD¢qqyqµLenKausXuQŁWuKcNqwGwZQyPD{l³L_c\\­n»\\Kc¡tmAI\\iP«DQiV\\MDgYbXEdQemSsL¹SkvËkAmaeC[Au¹UW]rwRZUV»^wu@]lc¡µiOUkg]QDYpcBco_iDwe­\\_{FVgfK{B`WlVPU®ITRG¤\\pd^E|{ \\ZebfjeLxshMKmnQRrN¾qT_DDĎ[brRdChj~væ^J]PR^fBKjPb¼IX_Ð{tfNX|@O|fP\\xUBXn^ºT¤G\\atZMZXnPBlAvJ¢®RC^U\\DjuFihYlFvFEtZUldÎxIªN~c¢R®StjBbPP`ch§Hw\\_HlqQU®TOBnTmzfVB¤zdIVeuC{ITZGzDUÊ|eOE[bgnxXJ¶EO[ÈĆ}f_yKd[SaVwBÛ~g@xwlg~idm@vysgL§oTG\\UhRRpHPUªXJw¢I¨D^]jrlsXKh`JZ`iHW{i\\U¥`MX^ezhrB`xcXApypq@HjbuM[^CrnEjrKveeb[Iej`oH_lCdiC@hdIJ`hfk`eqgIdgXixYeudL~rFHficVUQmJ]i]AQ{{QGp[JKhdZC~kdrbWJb~lgpkNUtulU~^Dzw|A~uXSlGu|Ql"]],"encodeOffsets":[[[103708,24876]]]}},{"type":"Feature","properties":{"adcode":530900,"name":"临沧市","center":[100.08697,23.886567],"centroid":[99.674418,23.938527],"childrenNum":8,"level":"city","parent":{"adcode":530000},"subFeatureIndex":7,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@klaCepYIaZwA³_¡EgaaUyHElH|d|Ct|A`hX¶sPETGPuS[}LUÀkbukyAaagCYgmOalyuoEKgzi{SI]eAOW^}Q}Ese@HwAeeAiapSfÛ[GTaKquP]I[§{£SeBmqe[Hm]¿X@Rtah@jkÂ{McDyuc¹cDoSsDOaOcM{pyMam[aEweYuXykx[YqLEVabDTcF^WL¯WqreV©Y@qaAgn§^xuEcb]IZsAmoTKrP~kW[J{ge@cie@bRO¨a°HQ¥¸ybVÂF\\R`gWvpv@dT@lnGy¼iHUUjCR¬jOJ[nBs¢Ld¼[®md[`´K|kCOzRYHxxMrLdXvłvRtWbvLfm¶Kzrr¡rCQb}dZ^O¦Xl[NRd^KN`nDVetIYjHn_vhQ°\\dZrÎHO²UXPvIKZLE¢PntfLZaXG_t]BÂF^gXHr"]],"encodeOffsets":[[[102818,25301]]]}},{"type":"Feature","properties":{"adcode":532300,"name":"楚雄彝族自治州","center":[101.546046,25.041988],"centroid":[101.569589,25.352508],"childrenNum":10,"level":"city","parent":{"adcode":530000},"subFeatureIndex":8,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@F|`rDdgfqQqvFnUZb~ZD@g]Be `ffOR~`tO^djbELMxyOI|UXLtgZRlhfbiZGdvf@XlpCaVFr_RH kQQ`lEf[T^pHwtLÄbJO\\LxsfoLKPTCrXLcbAh\\tE^VhVK^ZinbF`]^WxuqWo]CKi_COcoEVjÇWpoQ¥mGJiJoxFPTXªH]deSkDgQ]xkROfVppTvO\\LiPjzsVDePDXdq|Xm£GJYUgraQu{WIgH¡iSD³ekHqORqgEucec±kT]IĉnSH[i]_mbsnFfqWifeT[tMr[sFOaypoQeA\\ÍBsCSK«`[IevaDWBfUQPmEE[oMJeYIvM_RSauCg\\Pg^SKXYIDeRm@GiqRiQqnu]]mafeJk^@FqyN}`KF_eCH{Q@v[Fmu\\V°StLkDD±te·l}ZQP©Zgn[Jo{l}f_Xw|O¦nGDbp\\¸hjfJhOfdndg_GQRbC_^cGoVgrKdLl~ldTr´qpi@[fCPvzIcmLbPTSdPFBTvMljdE|nTG`t`Erwd`n]tT`[sJIcCGp_`R^kpX^bIzTY[Ue^n^x|]AKV®rFjVE\\|[pRXUvJP|tZXdDvgZi QLN"]],"encodeOffsets":[[[104681,25509]]]}},{"type":"Feature","properties":{"adcode":532500,"name":"红河哈尼族彝族自治州","center":[103.384182,23.366775],"centroid":[103.037257,23.440306],"childrenNum":13,"level":"city","parent":{"adcode":530000},"subFeatureIndex":9,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@CeuQLiOSÁTc\\DRebIY©p]Dga]F{sg©{[e}HS`Gc[ETaB£wUqc_umEPayKQv[TNhWFy@_iIkkAo]D_]_bMt\\r_dZZWbqF^ZYPgWwKcZYqmUIeRPRj·Ro_TmnDH_gSCSK]xXKBfAguYRyGmc]o¦ÇuaWuXqFnOr{J{pkEqJsia{D]P©BM]yf}KkkQu^[QwT[`uSgb½PmAWBodW_wqAygf]NW¦_Vj[X|jG_IY_LgtWqk^iC]§¡JIx©WOVoGQgQV[SHp¨hKzt un@jch}xk@whÜ}xAbU\\TczL`~eTSl|Pz\\P]NgpDzdjF^\\I®¯Jc~¨X\\BP_zS^inFaliK_dJg²KRa`EjaHTRSXjTjhfBvhgnDz|jGlZPxEt D~ªY`arKtgOiDtkCe¨µrOlfPLvWbxzzPxnVlWlnWZg`@´Õ{^iXF^NtK~l®LIf\\lvvhrhKb²N`Z]R^MjcTeOkLyu[FFtmUgeGeggYYgFIZicbqu§WD@kWcuSyPWguVOr`^[LbUhjAVj@°Sp|VDV¬qZ¢QV@¬{ Hrloª}lwLsf]YOhPZYbnidPteDXfRKF`]XdbYXeQWo]RuikBS`wbOvP\\r[lDi^bP¼XtG` pg\\RM\\_GqpiPN\\etM`|l^^lAHfKJX`@zrTR\\@~lXp h¨nVjKl\\VJW|zVBU@]xYB[x]Rn~s]iuTBhBmbVscMKV{nXnTMZiSsF]ccBQ[»NKiXO[i¯g@Ow»ykX~hWVh^DWZ{Lz¿cDc`eo^UKeeFQmXsiTcSM½bQY]`[A}e"],["@@_HIOFSd\\"]],"encodeOffsets":[[[105584,25096]],[[105527,24614]]]}},{"type":"Feature","properties":{"adcode":532600,"name":"文山壮族苗族自治州","center":[104.24401,23.36951],"centroid":[104.716265,23.688656],"childrenNum":8,"level":"city","parent":{"adcode":530000},"subFeatureIndex":10,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@[eyBFgmNC£cG·GQ[¹[e^oW}FMdffgdQORßxk[iLmU§gokW@}Q[qS@yW_ILGekB]]k_{NfsM[jOro`HN[[QhoH_WsO»]ajC\\k[quOPxaT_lAvj^QXpfRZWca^WE_LQWefCOsjcamZOYPg^ZtexK~kp©qkG|@«RUY¡rU«UC{To@¯UiiBVgKa\\_]PqvUXhzOvTXd@lXCv¨arjdJYhEZZhfhfHhnVEs\\EzvlKfPdSNiQ]c­`zUnBdSH]]vZhZ|rvDV^jd`@hLnIb[ÂRIvzVX~Ö`\\CmpaGQPG|ª\\f@XvPPYzWT`RpCLdVfl`^_^Dº²]Nt`zBjfB¨pkLufqhSnqrZhbSlyJeeH`gJ\\zRTtp~ÖJi|Duhh`sriTrVxM|jz¢PPrCjspTp]vIX_KsfNtxZ^zjT\\tjVa`GhbxZP¸YjO¨ffVghBBb^axWLhiVklCyfWG[t[}ZoQO_L{_{bcuMM`ZZWdsHs]NsysIM]@pX¥]wu@k[Jg]MX£R_v§lw~sGigje[s\\~ezB CZSZcG[kHWtFltxQjzyG[VL~¯v@u¥Ca`Ýj©Ea`_G@gN[kdåYgqTot¥lfjYpAUª"]],"encodeOffsets":[[[107077,25060]]]}},{"type":"Feature","properties":{"adcode":532800,"name":"西双版纳傣族自治州","center":[100.797941,22.001724],"centroid":[100.94391,21.930146],"childrenNum":3,"level":"city","parent":{"adcode":530000},"subFeatureIndex":11,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@P­SVRkrG[`Gxg¨_dOOaiAs­T¡Q}d©MwJÍkcYVFsEukEgZEjiv[CVD]­Q¡uIBAkOWmNYsY[b£H¹Sm]AWV[weOP{@W{MseÏ|W`»JOaLieAQ]O^]Iuåi}gcDQaq[_NoxwLecBamWJkeoC`uráPYWEc`I¨lA|aloBcaBe}ocE_\\aCoLsXvIpdQhXKrXKb\\Ox­fgXijBÆtJnpPn~Xj~pVBv`ZxEv^xA XJZÐ®CWoRE_fk`ARuJ¯_CIuK|DD¡^OwD£QSM×ÆEkcgMkÌ³¨f|¸B~^´VÎgAiYidghFruLmGrL`r^@C{XYlsBiV_TÂVRSÖ~e|Jj[PT\\W`JpixyEQhE²i\\XBrbfI~iN[^F_\\sMOV£ljSx{[|dMz£ÐbBlXTZb"]],"encodeOffsets":[[[104088,22868]]]}},{"type":"Feature","properties":{"adcode":532900,"name":"大理白族自治州","center":[100.225668,25.589449],"centroid":[100.039806,25.7274],"childrenNum":12,"level":"city","parent":{"adcode":530000},"subFeatureIndex":12,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@xOV´QQË®HnYun{PpMlK|tNuKGcxWkHsSI¥`T¡SShiTkz`@|©ZV[ØqvspC`]TEXjZÐD@nKhv`b@^Ce^ofWfFi\\RxBbQS]dakElaV¿K\\~vTOHFStOWµgB_{Dsc{G{kFzGVbhb¢F´`xBbYZJfobDlkZBlrÒFD_`UK¸PZ[LYUR@G|fDE`_LM~rzE]@Ilefnb^v^mRrQjrHjn@fQCZJWTLh]Oh[vDTbQN`uZJIfpNF\\FOnReVACXubJf_\\L¬TDAt[ÎBRfopzPbE\\tqsNS\\efjX ermEat`nj^G\\mTJĊS^]]{D]`oRGfYcFOemYOeiL­bF¯aEr`OWyDQrKÀ^VmpcOy^M|h[VgÔc\\VbnTn|aAfCAd}^eKAhc^T|@uvNtCWxDLpWre[Lv@WP@j­WA°SËm[qA}qLE£YoZ^M\\udgFBqÉBpSq]oJYwdiD]QUm@k[»sm[\\±KnwQowqGWo]wJuLkr[]gcOmBUS·uy}]K`|WMU¿|}QGr«Lk[AWeeO¥X}OyLnCvVVYlJwllµFwSWjNXPBuQMzyFakHK[kIVojyFIlGIitc]_Cw^»"]],"encodeOffsets":[[[101262,26251]]]}},{"type":"Feature","properties":{"adcode":533100,"name":"德宏傣族景颇族自治州","center":[98.578363,24.436694],"centroid":[98.085143,24.557413],"childrenNum":5,"level":"city","parent":{"adcode":530000},"subFeatureIndex":13,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@aMCaU]LgaFU·»QUJ}XgmÙisBPSC`C}jAZm¯TQRk_yÁscBoybYL§CÍMKÙs©DUVXKæbR[@}ZopUBeekDFKnJzYdoA`ATeg[GeammO±mI_qAa[ve[\\XpJYdRFbx_bVDj|r^O|xpPE[hffF ^V^¼~dAbòLn`ÐWBKJ^Ą\\nEÊDH_cHU®vM|luZR~CljQ]\\En QRXvWronLTUn_Py^NMdD`MimMgLgUQXT\\OhaVA`gluDBXvYzVnyV\\J~z¢UTzkAkTiWwAe]Qt×CyTIWX{i_@ke_XHde^HpLt`dYloKeHWrK\\NpdMbwF]XK|_Z"]],"encodeOffsets":[[[100444,25945]]]}},{"type":"Feature","properties":{"adcode":533300,"name":"怒江傈僳族自治州","center":[98.854304,25.850949],"centroid":[98.868904,26.962444],"childrenNum":4,"level":"city","parent":{"adcode":530000},"subFeatureIndex":14,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@ihiNEtwÈP_HTl[HMjLjRuIf@]PeWU`qoxgkaBfÖmPEOfgMTqAMXG]T][QVGfEJfgIgVHRapXpExN~eHD|^RRnGffDdY{Iu^iMH|iZrEitdcWPTl|y©Gh^DxQ|]bFtMchJlUNMTØA[xZXLOleDQiRCxcrVv]o`uDYeuNIg}u{@UTB¦ghNp@q ]HizHncXGxgPO[UImiXCy|kP}j[U[_N]JqOS[R{X[SW[LsYP^Y@d¥Qa_@WkNeg^AKNolakSE]Zg~gF[bIJil£G{XhUCdTXpxPRØO\\X~CDOzGD^fV~½¸ihnlmdEKsPei}ho]_Em`YH§vUPiKg}`W[[LWwUfÏCÁzGriE{]TaMe`¥Lu}«I«[H_pKQyhAgY}]WD¹Q¯FgMYOFysuo_UÉQn¡IemcXeecoJzYtwFo_[V]kt»@{\\·nDp_v{`HnmasRspWO}dkO_lkUmR{[£^uxIvR¦QdºgnhF]¼Dx^`sdJjHJkzEpiUlJL\\lGEbyzRNAvOMWXixTEk¶kIxkUZuUmDKPzW~P¦ffBXl\\¬KHq~RÀ{NV{X_^Lz~¸vVTnAdP^hq\\lvKIxp^HXxrRpmxL[²n\\¼tl\\n@V^R"]],"encodeOffsets":[[[102035,27318]]]}},{"type":"Feature","properties":{"adcode":533400,"name":"迪庆藏族自治州","center":[99.706463,27.826853],"centroid":[99.440026,27.956929],"childrenNum":3,"level":"city","parent":{"adcode":530000},"subFeatureIndex":15,"acroutes":[100000,530000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@PZGc\\nrBz]VI¡Z~t|·ºanXQVk´aebZbE\\XzWdlJ`ZIZrfjPHr|ÏjWLN|\\f[p_CheJlm^EnRMpENrDofH`[l@°I«JEgaoT}]__m}VSCmSkF@[}oE}LoSOkPSMkd_ZqkQZw\\ALaa}[UDu_[jsHsWIc@^w~]@ysXOcBPtQZfO}`DTy|Qjl`GRpg¤Ch\\rcNLdOhcPI]pNgzFb[@zh¢PºQ¤JjQ^IH|QL`QX\\KniDeYE[e¡`CoYWLrm^yR¯OauQQ¿@w´oQ[Na¥U@asOkRoSqpBrU¦HtUPJh}@VgNq]_©XsGFp[YT^]awX}`[F_eyWGWK@[v¥MOfB[iTqOf\\gAgzqhMawUQkD¹a[UudqDwjQRfCPkWKY\\wBS×NVMIkdgNEs^aR{Cw]Hgªz{SkXOdcjsFYqjG{jNv]|JZCceeHQm]QC{fGM}FwWoboGQhUhJIeeFHUR^\\^SHNWrBShNeFPOnÕAeblwhrpV_fX^O@GrWTMt}hWJjQfdEO_LUlH^yn`g®x¤``ov@YhXbK~|VNX`J¤lAod]O{PqfejIWo\\UNopYh}culgEYqL_`CrzQrkDar]pqXcHofYTqjc@[dk]KPMeXWGe\\Kº`~VLEpj¶S`VZoÄP d¾nfzLLVMwPVgalXlbI~tROfGf[N^lLt"]],"encodeOffsets":[[[102707,28402]]]}}],"UTF8Encoding":true});
}));