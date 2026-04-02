        /* --- Search Engine Logic --- */
        const engines = {
            bing: { 
                url: 'https://www.bing.com/search', 
                param: 'q', 
                placeholder: 'Ask Bing...',
                icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#00809d"><path d="M5,3v16.1l7.6,4.9l7.2-11.5l-2.4-4.7l-4.1,10.9l-4.8-2.3V6.2L5,3z"/></svg>'
            },
            google: { 
                url: 'https://www.google.com/search', 
                param: 'q', 
                placeholder: 'Ask Google...',
                icon: '<span style="font-weight:bold; color:#EA4335; font-size:20px;">G</span>'
            },
            scholar: { 
                url: 'https://scholar.google.com/scholar', 
                param: 'q', 
                placeholder: 'Search Scholar...',
                icon: '<span style="font-size:20px;">🎓</span>'
            },
            gemini: { 
                url: 'https://gemini.google.com/app', 
                param: '', 
                placeholder: 'Ask Gemini...',
                icon: '<span style="font-size:20px; background: linear-gradient(135deg, #4E75EE, #9D65D6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">�?/span>'
            },
            Copilot:{
                url: 'https://www.bing.com/copilotsearch',
                param: 'q',
                placeholder: 'Ask Copilot...',
                icon: '<svg t="1763882102713" class="icon" viewBox="0 0 1166 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14534" width="50%" height="50%"><path d="M588.217842 71.793837c0 8.706634-4.346791 13.053425-13.053425 13.053425a2001.377226 2001.377226 0 0 1-352.442474 26.10685c5.913202-12.505181 14.619836-23.391738 26.10685-32.633562 113.04266-6.526712 226.176695-8.693581 339.389049-6.526713z" fill="#2DB7F8" opacity=".971" p-id="14535"></path><path d="M588.217842 71.793837c39.852106-5.090836 74.665591 3.615799 104.4274 26.10685-57.39591 10.220832-107.429688 36.327682-150.114387 78.32055-5.208317-2.976181-7.375185-7.336025-6.526713-13.053425v-26.10685-13.053425a85.382453 85.382453 0 0 0 39.160275-39.160275c8.706634 0 13.053425-4.346791 13.053425-13.053425z" fill="#093AC5" opacity=".998" p-id="14536"></path><path d="M575.164417 84.847262a85.382453 85.382453 0 0 1-39.160275 39.160275h-326.335624c0-8.706634 4.346791-13.053425 13.053425-13.053425 118.342351 1.683892 235.823176-7.022743 352.442474-26.10685z" fill="#21A7F3" p-id="14537"></path><path d="M209.668518 124.007537h326.335624v13.053425c-117.611359 1.644732-235.092184 5.991522-352.442474 13.053425 4.346791-13.053425 13.053425-21.760059 26.10685-26.10685z" fill="#19A0EF" p-id="14538"></path><path d="M692.645242 97.900687c10.93877 4.464271 15.298614 13.157852 13.053425 26.10685a889.551753 889.551753 0 0 0-169.694525 91.373975c-10.40358-5.965415-14.75037-14.67205-13.053425-26.10685v-26.10685h13.053425c-0.848473 5.7174 1.318396 10.077244 6.526713 13.053425 42.6847-41.992868 92.718478-68.099718 150.114387-78.32055z" fill="#1242C8" opacity=".999" p-id="14539"></path><path d="M536.004142 137.060962v26.10685h-13.053425c-113.368996 10.86045-230.849821 15.20724-352.442474 13.053425l13.053425-26.10685a7639.908576 7639.908576 0 0 1 352.442474-13.053425z" fill="#1196EA" opacity=".999" p-id="14540"></path><path d="M522.950717 163.167812v26.10685c-10.93877 4.464271-15.298614 13.157852-13.053425 26.10685-34.199973 3.498318-66.833536-0.848473-97.900687-13.053425a1468.157868 1468.157868 0 0 1-267.595212 26.10685l26.10685-52.2137c121.592654 2.153815 239.073479-2.192975 352.442474-13.053425z" fill="#0D91E3" opacity=".999" p-id="14541"></path><path d="M718.752092 176.221237c13.249226 43.67676 39.356076 78.490244 78.32055 104.4274-49.576908 12.831517-101.790608 17.191361-156.6411 13.053425h-52.2137c18.744718-66.598574 62.251784-105.758849 130.53425-117.480825z" fill="#1F73DF" opacity=".968" p-id="14542"></path><path d="M509.897292 215.381512c2.245189 12.948998-2.114655 21.642579-13.053425 26.10685-19.110214-8.61526-40.85722-12.962051-65.267125-13.053425-100.106716 9.424573-200.174272 18.131207-300.228774 26.10685l13.053425-26.10685c90.590769-0.574351 179.784822-9.267932 267.595212-26.10685 31.067151 12.204952 63.700714 16.551743 97.900687 13.053425z" fill="#1192DA" opacity=".958" p-id="14543"></path><path d="M705.698667 124.007537c8.706634 0 13.053425 4.346791 13.053425 13.053425-86.544208 19.39739-143.091645 71.611089-169.694525 156.6411a247.244923 247.244923 0 0 0-65.267125 39.160275v-39.160275c11.800296-9.254878 16.147087-22.308303 13.053425-39.160275v-13.053425c10.93877-4.464271 15.298614-13.157852 13.053425-26.10685-2.245189-12.948998 2.114655-21.642579 13.053425-26.10685-1.696945 11.4348 2.649845 20.141435 13.053425 26.10685a889.551753 889.551753 0 0 1 169.694525-91.373975z" fill="#1648C9" p-id="14544"></path><path d="M718.752092 137.060962v39.160275c-68.282466 11.721976-111.789532 50.882251-130.53425 117.480825h-39.160275c26.60288-85.03001 83.150317-137.24371 169.694525-156.6411z" fill="#2057D0" opacity=".923" p-id="14545"></path><path d="M496.843867 241.488362v13.053425c-121.918989 2.179922-243.759658 6.526712-365.495899 13.053425v-13.053425c100.054503-7.975643 200.122058-16.682277 300.228774-26.10685 24.409905 0.091374 46.156911 4.438164 65.267125 13.053425z" fill="#1996CD" p-id="14546"></path><path d="M496.843867 254.541787c3.093662 16.851972-1.253129 29.905397-13.053425 39.160275-20.206702-16.891132-46.313552-25.584713-78.32055-26.10685a3742.886867 3742.886867 0 0 1-287.175349 26.10685l13.053425-26.10685c121.736241-6.526712 243.57691-10.873503 365.495899-13.053425z" fill="#219AC0" opacity=".999" p-id="14547"></path><path d="M483.790442 293.702062c-121.971203 1.292289-243.798818 5.63908-365.495899 13.053425v-13.053425a3742.886867 3742.886867 0 0 0 287.175349-26.10685c32.006998 0.522137 58.113848 9.215718 78.32055 26.10685z" fill="#299EB3" p-id="14548"></path><path d="M483.790442 293.702062v52.2137c-8.706634 0-13.053425-4.346791-13.053425-13.053425-120.13067-10.40358-241.958286-6.043736-365.495899 13.053425a74.770018 74.770018 0 0 0 13.053425-39.160275 7272.55909 7272.55909 0 0 1 365.495899-13.053425z" fill="#32A2A5" opacity=".998" p-id="14549"></path><path d="M470.737017 332.862337a10357.200895 10357.200895 0 0 1-365.495899 26.10685v-13.053425c123.537614-19.097161 245.365229-23.457005 365.495899-13.053425z" fill="#3BA896" opacity=".999" p-id="14550"></path><path d="M797.072642 280.648637c55.803392-9.790069 99.323511 7.610147 130.53425 52.2137h-156.6411c-27.503566-12.635715-57.957207-16.995559-91.373975-13.053425h-52.2137l13.053425-26.10685c54.850492 4.137936 107.064192-0.221908 156.6411-13.053425z" fill="#B66BEC" opacity=".86" p-id="14551"></path><path d="M770.965792 332.862337h156.6411c12.191899 13.941058 16.551743 31.341273 13.053425 52.2137a945.64232 945.64232 0 0 1-156.6411-6.526712c-23.652806-13.575562-27.999597-28.808909-13.053425-45.686988z" fill="#A650E3" opacity=".999" p-id="14552"></path><path d="M470.737017 332.862337c0 8.706634 4.346791 13.053425 13.053425 13.053425 0 8.706634-4.346791 13.053425-13.053425 13.053425a11069.826525 11069.826525 0 0 0-378.549324 26.10685l13.053425-26.10685a10357.200895 10357.200895 0 0 0 365.495899-26.10685z" fill="#44AC87" p-id="14553"></path><path d="M470.737017 358.969187c0.874579 19.044947-3.472211 36.445163-13.053425 52.2137-122.101737-1.435877-243.942406 2.910914-365.495899 13.053425v-39.160275a11069.826525 11069.826525 0 0 1 378.549324-26.10685z" fill="#53B272" opacity=".999" p-id="14554"></path><path d="M627.378117 319.808912h52.2137c64.927736 90.290541 151.95492 120.744181 261.0685 91.373975v52.2137c-125.926391 2.062441-239.047372-32.73799-339.38905-104.4274 5.63908-15.794644 14.345714-28.848069 26.10685-39.160275z" fill="#BE52C6" opacity=".977" p-id="14555"></path><path d="M679.591817 319.808912c33.416768-3.942134 63.870408 0.41771 91.373975 13.053425-14.946172 16.878079-10.599381 32.111425 13.053425 45.686988 52.030952 6.513659 104.244652 8.693581 156.6411 6.526712v26.10685c-109.113579 29.370206-196.140764-1.083434-261.0685-91.373975z" fill="#B150D4" opacity=".999" p-id="14556"></path><path d="M457.683592 411.182887v26.10685c-126.004711 8.458619-252.192171 12.818463-378.549324 13.053425-2.245189-12.948998 2.114655-21.642579 13.053425-26.10685a3850.18602 3850.18602 0 0 1 365.495899-13.053425z" fill="#6FB75D" opacity=".998" p-id="14557"></path><path d="M601.271267 372.022612v-13.053425c100.341678 71.68941 213.462659 106.489841 339.38905 104.4274 3.093662 16.851972-1.253129 29.905397-13.053425 39.160275-128.537076 2.192975-237.311266-41.31409-326.335625-130.53425z" fill="#C751BB" opacity=".997" p-id="14558"></path><path d="M457.683592 437.289737c0 8.706634-4.346791 13.053425-13.053425 13.053425a9470.220667 9470.220667 0 0 1-365.495899 26.10685v-26.10685c126.357154-0.234962 252.544613-4.594806 378.549324-13.053425z" fill="#81B951" opacity=".999" p-id="14559"></path><path d="M588.217842 437.289737a536.208592 536.208592 0 0 1 143.587675 97.900687 2604.02775 2604.02775 0 0 0 182.74795 19.580138c3.093662 16.851972-1.253129 29.905397-13.053425 39.160275-122.140898-13.092585-230.915088-56.599651-326.335625-130.53425-2.245189-12.948998 2.114655-21.642579 13.053425-26.10685z" fill="#E3569B" opacity=".972" p-id="14560"></path><path d="M601.271267 372.022612c89.024358 89.22016 197.798549 132.727225 326.335625 130.53425v26.10685c-137.961649 15.050599-246.735839-32.81631-326.335625-143.587675v-13.053425z" fill="#D153AF" opacity=".998" p-id="14561"></path><path d="M575.164417 463.396587c95.420537 73.934599 204.194727 117.441665 326.335625 130.53425v13.053425c-128.510969 2.206029-237.285159-41.31409-326.335625-130.53425v-13.053425z" fill="#EA5792" p-id="14562"></path><path d="M444.630167 450.343162c3.093662 16.851972-1.253129 29.905397-13.053425 39.160275-117.350291 7.061903-234.831115 11.408693-352.442474 13.053425v-26.10685a9470.220667 9470.220667 0 0 0 365.495899-26.10685z" fill="#99BC42" opacity=".999" p-id="14563"></path><path d="M431.576742 489.503437v26.10685h-352.442474v-13.053425a7639.908576 7639.908576 0 0 0 352.442474-13.053425z" fill="#A9BE37" opacity=".986" p-id="14564"></path><path d="M575.164417 476.450012c89.050465 89.22016 197.824656 132.740279 326.335625 130.53425v26.10685c-37.280582 7.101063-76.440857 4.934195-117.480825-6.526713a1499.368608 1499.368608 0 0 0-169.694525-65.267125c-13.471135-21.237922-30.884404-36.458216-52.2137-45.686987-3.093662-16.851972 1.253129-29.905397 13.053425-39.160275z" fill="#F1598A" opacity=".967" p-id="14565"></path><path d="M79.134268 515.610287h352.442474v13.053425c-117.285023 8.693581-234.765848 13.053425-352.442474 13.053425v-26.10685z" fill="#B6BF2E" opacity=".999" p-id="14566"></path><path d="M601.271267 385.076037c79.599786 110.771364 188.373976 158.638274 326.335625 143.587675 2.245189 12.948998-2.114655 21.642579-13.053425 26.10685a2604.02775 2604.02775 0 0 1-182.74795-19.580138 536.208592 536.208592 0 0 0-143.587675-97.900687c-3.498318-20.872427 0.861526-38.272642 13.053425-52.2137z" fill="#D954A5" opacity=".999" p-id="14567"></path><path d="M431.576742 528.663712a74.770018 74.770018 0 0 0-13.053425 39.160275c-111.045486 4.699233-219.819677 13.405867-326.335624 26.10685-12.191899-13.941058-16.551743-31.341273-13.053425-52.2137 117.676626 0 235.157451-4.359844 352.442474-13.053425z" fill="#CAC222" opacity=".978" p-id="14568"></path><path d="M562.110992 528.663712c90.603823 83.972683 199.378013 127.492802 326.335625 130.53425 2.245189 12.948998-2.114655 21.642579-13.053425 26.10685-118.498992-13.627776-227.273182-52.788051-326.335625-117.480825-3.093662-16.851972 1.253129-29.905397 13.053425-39.160275z" fill="#F46781" opacity=".974" p-id="14569"></path><path d="M418.523317 567.823987l-13.053425 26.10685c-100.185037 2.349616-200.252593 6.70946-300.228774 13.053425-8.706634 0-13.053425-4.346791-13.053425-13.053425 106.515948-12.700983 215.290138-21.407617 326.335624-26.10685z" fill="#E1C413" opacity=".999" p-id="14570"></path><path d="M536.004142 580.877412c100.250304 75.487957 213.384338 114.648232 339.38905 117.480825l-13.053425 26.10685c-118.747007-13.314493-227.521198-52.474768-326.335625-117.480825v-13.053425-13.053425z" fill="#F57278" opacity=".995" p-id="14571"></path><path d="M405.469892 593.930837l-26.10685 39.160275a585.237256 585.237256 0 0 1-130.534249 13.053425 423.413946 423.413946 0 0 1-104.4274-6.526713c-18.823039-4.921141-31.876464-15.794644-39.160275-32.633562 99.976182-6.343965 200.043738-10.703808 300.228774-13.053425z" fill="#F4C50E" opacity=".999" p-id="14572"></path><path d="M536.004142 606.984262c98.814427 65.006056 207.588618 104.166331 326.335625 117.480825 0 8.706634-4.346791 13.053425-13.053425 13.053425-113.99556-6.722514-218.42296-41.535998-313.2822-104.4274v-26.10685z" fill="#F77975" opacity=".999" p-id="14573"></path><path d="M536.004142 580.877412c0-8.706634 4.346791-13.053425 13.053425-13.053425 99.062442 64.692774 207.836633 103.853049 326.335625 117.480825v13.053425c-126.004711-2.832593-239.138746-41.992868-339.38905-117.480825z" fill="#F56D7C" opacity=".998" p-id="14574"></path><path d="M418.523317 633.091112h39.160275c-14.241287 80.696273-49.054771 150.323242-104.427399 208.8548-26.615934-18.418383-39.669359-44.525233-39.160275-78.32055 73.751851-12.792356 108.552282-56.299422 104.427399-130.53425z" fill="#FE643E" opacity=".936" p-id="14575"></path><path d="M562.110992 515.610287c21.329296 9.228771 38.742565 24.449065 52.2137 45.686987 58.479344 18.535863 115.039834 40.308976 169.694525 65.267125 41.039968 11.460907 80.200243 13.627776 117.480825 6.526713l-13.053425 26.10685c-126.957611-3.041448-235.731802-46.561567-326.335625-130.53425v-13.053425z" fill="#F36085" opacity=".999" p-id="14576"></path><path d="M522.950717 672.251387v-13.053425a6727.709131 6727.709131 0 0 1 208.8548 84.847262 444.821563 444.821563 0 0 0 104.4274 19.580138v13.053425c-112.403043-11.35648-216.830442-46.169964-313.2822-104.4274z" fill="#F8866D" opacity=".991" p-id="14577"></path><path d="M509.897292 711.411662v-13.053425a1533.255299 1533.255299 0 0 0 300.228775 104.4274c0 8.706634-4.346791 13.053425-13.053425 13.053425-104.205492-13.001211-199.926257-47.814696-287.17535-104.4274z" fill="#FA9265" opacity=".985" p-id="14578"></path><path d="M509.897292 711.411662c87.249093 56.612704 182.969858 91.426189 287.17535 104.4274-4.346791 13.053425-13.053425 21.760059-26.10685 26.10685a1299.755633 1299.755633 0 0 1-274.121925-104.4274l13.053425-26.10685z" fill="#FB9861" opacity=".971" p-id="14579"></path><path d="M536.004142 633.091112c94.859239 62.891402 199.286639 97.704886 313.2822 104.4274 2.245189 12.948998-2.114655 21.642579-13.053425 26.10685a444.821563 444.821563 0 0 1-104.4274-19.580138 6727.709131 6727.709131 0 0 0-208.8548-84.847262c-2.245189-12.948998 2.114655-21.642579 13.053425-26.10685z" fill="#F77F71" opacity=".991" p-id="14580"></path><path d="M379.363042 633.091112h39.160275c4.124882 74.234828-30.675549 117.741893-104.427399 130.53425-14.332661-42.6847-36.079667-81.844975-65.267125-117.480825 44.120576 0.522137 87.640695-3.824654 130.534249-13.053425z" fill="#FF8247" opacity=".849" p-id="14581"></path><path d="M457.683592 633.091112h26.10685c14.528462 18.875253 16.708384 40.635312 6.526713 65.267125a1451.410324 1451.410324 0 0 1-97.900688 156.6411c-16.851972 3.093662-29.905397-1.253129-39.160274-13.053425 55.372629-58.531558 90.186113-128.158527 104.427399-208.8548z" fill="#EF513C" opacity=".996" p-id="14582"></path><path d="M536.004142 593.930837v39.160275c-10.93877 4.464271-15.298614 13.157852-13.053425 26.10685v13.053425c-10.93877 4.464271-15.298614 13.157852-13.053425 26.10685v13.053425l-13.053425 26.10685a74.770018 74.770018 0 0 1-13.053425 39.160275c-11.095411 31.093258-28.50868 57.200108-52.2137 78.32055h-39.160275a1451.410324 1451.410324 0 0 0 97.900688-156.6411c10.181671-24.631813 8.00175-46.391872-6.526713-65.267125a3960.905171 3960.905171 0 0 1 52.2137-39.160275z" fill="#D5403E" opacity=".996" p-id="14583"></path><path d="M522.950717 672.251387c96.451757 58.257436 200.879157 93.07092 313.2822 104.4274-4.346791 13.053425-13.053425 21.760059-26.10685 26.10685a1533.255299 1533.255299 0 0 1-300.228775-104.4274c-2.245189-12.948998 2.114655-21.642579 13.053425-26.10685z" fill="#F98C68" opacity=".998" p-id="14584"></path><path d="M496.843867 737.518512a1299.755633 1299.755633 0 0 0 274.121925 104.4274c-36.379895 12.753196-75.54017 17.099987-117.480825 13.053425a1519.314241 1519.314241 0 0 0-169.694525-78.32055 74.770018 74.770018 0 0 0 13.053425-39.160275z" fill="#FCA05C" p-id="14585"></path><path d="M483.790442 776.678787a1519.314241 1519.314241 0 0 1 169.694525 78.32055h-221.908225c23.70502-21.120442 41.118289-47.227292 52.2137-78.32055z" fill="#FDAC52" p-id="14586"></path></svg>'
            },
            Translate:{
                icon: '🌐',
                url: 'https://translate.google.com/?hl=zh-CN&sl=auto&tl=zh-CN&op=translate',
                placeholder: 'Translate...',
                param:'text',
                icon:'<svg t="1763882644915" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15788" width="50%" height="50%"><path d="M921.6 153.6H454.656L409.6 0H102.4A102.725818 102.725818 0 0 0 0 102.4v665.6a102.725818 102.725818 0 0 0 102.4 102.4h358.4L512 1024h409.6a102.725818 102.725818 0 0 0 102.4-102.4V256a102.725818 102.725818 0 0 0-102.4-102.4M264.704 644.608a209.314909 209.314909 0 0 1-148.107636-357.469091A209.314909 209.314909 0 0 1 264.704 225.745455 198.656 198.656 0 0 1 404.992 281.6l4.608 2.048-64 60.416-3.072-2.56a111.243636 111.243636 0 0 0-77.824-30.208A123.252364 123.252364 0 0 0 142.848 435.2a123.252364 123.252364 0 0 0 121.856 123.904 104.913455 104.913455 0 0 0 108.544-74.752H260.096V404.992h202.24l0.512 4.608c1.908364 9.960727 2.792727 20.061091 2.56 30.208 0 120.32-81.408 204.8-200.704 204.8m308.736-87.552c16.989091 31.185455 37.422545 60.416 60.928 87.04l-27.648 27.136-33.28-114.176m39.424-38.912H563.2l-16.896-53.248h204.288a393.216 393.216 0 0 1-79.872 140.288 470.109091 470.109091 0 0 1-57.856-87.04M972.8 921.6a51.339636 51.339636 0 0 1-51.2 51.2h-358.4l102.4-102.4-41.472-141.824 47.104-47.104 137.216 137.728 36.352-37.376-137.728-137.216a447.022545 447.022545 0 0 0 98.304-179.712H870.4V411.648h-186.368V358.4h-53.248v53.248h-100.352L470.016 204.8H921.6a51.339636 51.339636 0 0 1 51.2 51.2v665.6z" fill="#4989F3" p-id="15789"></path></svg>'
            }
        };

        let currentEngine = 'bing';

        // Toggle Dropdown
        const dropdown = document.getElementById('engine-dropdown');
        document.getElementById('current-engine-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });

        function setEngine(engineKey) {
            currentEngine = engineKey;
            const engine = engines[engineKey];
            document.getElementById('current-engine-btn').innerHTML = engine.icon;
            document.getElementById('search-input').placeholder = engine.placeholder;
            
            // Focus input
            document.getElementById('search-input').focus();
        }

        // Handle Search Submit
        document.getElementById('search-form').addEventListener('submit', function(e) {
            const inputVal = document.getElementById('search-input').value.trim();
            
            if (currentEngine === 'gemini') {
                e.preventDefault(); // Stop form submission
                if (inputVal) {
                    // 1. Copy to Clipboard
                    navigator.clipboard.writeText(inputVal).then(() => {
                        // Show toast
                        const toast = document.getElementById('toast');
                        toast.classList.add('show');
                        setTimeout(() => toast.classList.remove('show'), 3000);
                        
                        // 2. Open Gemini in new tab
                        setTimeout(() => {
                            window.open(engines.gemini.url, '_blank');
                        }, 800);
                    });
                } else {
                    window.open(engines.gemini.url, '_blank');
                }
            } else {
                // Normal engines: Bing, Google, Scholar
                this.action = engines[currentEngine].url;
            }
        });


        /* --- Clock --- */
        function updateClock() {
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            document.getElementById('clock-day').innerText = days[now.getDay()];
            document.getElementById('clock-time').innerText = `${now.getHours()}:${now.getMinutes().toString().padStart(2,'0')}`;
            document.getElementById('clock-date').innerText = `${months[now.getMonth()]} ${now.getDate()}`;
        }
        setInterval(updateClock, 1000); updateClock();

        /* Network Latency */
        const sites = [ { id: 'ping-yt', url: 'https://www.youtube.com/favicon.ico' }, { id: 'ping-sch', url: 'https://scholar.google.com/favicon.ico' }, { id: 'ping-gem', url: 'https://gemini.google.com/favicon.ico' }, { id: 'ping-bili', url: 'https://www.bilibili.com/favicon.ico' } ];
        async function checkLatency(url) { const start = Date.now(); try { await fetch(url, { mode: 'no-cors', cache: 'no-store' }); return Date.now() - start; } catch (e) { return -1; } }
        async function updateNetworkStatus() {
            for (let site of sites) {
                const ms = await checkLatency(site.url);
                const el = document.getElementById(site.id), msEl = el.querySelector('.net-ms'), barEl = el.querySelector('.net-bar-fill');
                if (ms === -1) { msEl.innerText = "Err"; msEl.style.color = "var(--danger-color)"; barEl.style.width = "100%"; barEl.style.background = "var(--danger-color)"; }
                else { msEl.innerText = ms + " ms"; let color = "var(--success-color)", width = "30%"; if (ms < 100) { color = "#34C759"; width = "30%"; msEl.style.color = "var(--text-primary)"; } else if (ms < 400) { color = "#FF9500"; width = "60%"; msEl.style.color = "var(--text-primary)"; } else { color = "#FF3B30"; width = "90%"; msEl.style.color = "#FF3B30"; } barEl.style.background = color; barEl.style.width = width; }
            }
        }
        setTimeout(updateNetworkStatus, 1000); setInterval(updateNetworkStatus, 5000);

        /* Terminal Command Tool */
        const terminalOutput = document.getElementById('terminal-output');
        const terminalInput = document.getElementById('terminal-input');
        const cmdPrompt = document.getElementById('cmd-prompt');
        const commandHistory = [];
        let historyIndex = -1;
        const promptText = cmdPrompt ? cmdPrompt.textContent : '>';
        const TERMINAL_COMMANDS = ['help', 'clear', 'cal', 'weather', 'ping', 'open', 'search', 'theme', 'time'];
        const OPEN_TARGET_ALIASES = {
            yt: 'https://www.youtube.com',
            youtube: 'https://www.youtube.com',
            gh: 'https://github.com',
            github: 'https://github.com',
            bili: 'https://www.bilibili.com',
            bilibili: 'https://www.bilibili.com',
            notion: 'https://www.notion.so',
            gemini: 'https://gemini.google.com',
            pku: 'https://www.pku.edu.cn'
        };
        const completionState = { base: '', items: [], index: -1 };
        const THEME_STORAGE_KEY = 'homepage_theme';
        const THEME_PRESETS = {
            stars: {
                vars: {
                    '--bg-wallpaper': 'radial-gradient(circle at 18% 20%, rgba(64, 102, 186, 0.34) 0%, rgba(64, 102, 186, 0) 32%), radial-gradient(circle at 78% 18%, rgba(126, 84, 173, 0.28) 0%, rgba(126, 84, 173, 0) 34%), radial-gradient(circle at 50% 100%, #0a1326 0%, #050911 56%, #03050a 100%)',
                    '--glass-bg': 'rgba(26, 32, 52, 0.58)',
                    '--glass-border': 'rgba(170, 196, 255, 0.28)',
                    '--bg-engine-dropdown': 'rgba(20, 26, 40, 0.95)',
                    '--text-primary': '#e8f0ff',
                    '--text-secondary': '#9fb2d8',
                    '--text-tertiary': '#6f7f9f'
                }
            },
            aurora: {
                vars: {
                    '--bg-wallpaper': 'radial-gradient(circle at 22% 18%, rgba(76, 183, 207, 0.36) 0%, rgba(76, 183, 207, 0) 36%), radial-gradient(circle at 74% 22%, rgba(120, 208, 151, 0.3) 0%, rgba(120, 208, 151, 0) 38%), radial-gradient(circle at 50% 100%, #051a1d 0%, #031014 58%, #02080a 100%)',
                    '--glass-bg': 'rgba(19, 40, 44, 0.58)',
                    '--glass-border': 'rgba(150, 223, 206, 0.3)',
                    '--bg-engine-dropdown': 'rgba(15, 33, 38, 0.95)',
                    '--text-primary': '#daf7f0',
                    '--text-secondary': '#90c8bc',
                    '--text-tertiary': '#618d87'
                }
            },
            ember: {
                vars: {
                    '--bg-wallpaper': 'radial-gradient(circle at 18% 18%, rgba(207, 103, 76, 0.35) 0%, rgba(207, 103, 76, 0) 34%), radial-gradient(circle at 80% 22%, rgba(224, 160, 92, 0.3) 0%, rgba(224, 160, 92, 0) 38%), radial-gradient(circle at 50% 100%, #23110a 0%, #140904 58%, #0a0402 100%)',
                    '--glass-bg': 'rgba(53, 28, 18, 0.58)',
                    '--glass-border': 'rgba(236, 176, 125, 0.3)',
                    '--bg-engine-dropdown': 'rgba(40, 20, 12, 0.95)',
                    '--text-primary': '#ffecd8',
                    '--text-secondary': '#ddb894',
                    '--text-tertiary': '#9d7a59'
                }
            }
        };
        let activeTheme = 'stars';

        const TIMEZONE_ALIASES = {
            local: 'local',
            beijing: 'Asia/Shanghai',
            shanghai: 'Asia/Shanghai',
            tokyo: 'Asia/Tokyo',
            seoul: 'Asia/Seoul',
            singapore: 'Asia/Singapore',
            london: 'Europe/London',
            paris: 'Europe/Paris',
            ny: 'America/New_York',
            newyork: 'America/New_York',
            la: 'America/Los_Angeles',
            losangeles: 'America/Los_Angeles',
            utc: 'UTC'
        };

        function appendTerminalLine(type, text) {
            if (!terminalOutput) return;
            const line = document.createElement('div');
            line.className = `terminal-line ${type}`;
            line.textContent = text;
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        function formatNumber(value) {
            if (!Number.isFinite(value)) return String(value);
            const normalized = Math.abs(value) < 1e-12 ? 0 : value;
            return Number(normalized.toPrecision(12)).toString();
        }

        function clearTerminalOutput() {
            terminalOutput.innerHTML = '';
        }

        function tokenizeExpression(expression) {
            const tokens = [];
            const cleaned = expression.replace(/\s+/g, '');
            let i = 0;

            while (i < cleaned.length) {
                const ch = cleaned[i];

                if (/[0-9.]/.test(ch)) {
                    const start = i;
                    i += 1;
                    while (i < cleaned.length && /[0-9.]/.test(cleaned[i])) i += 1;
                    const rawNumber = cleaned.slice(start, i);
                    if (!/^\d*\.?\d+$/.test(rawNumber) || rawNumber === '.') {
                        throw new Error(`Invalid number near "${rawNumber}"`);
                    }
                    tokens.push({ type: 'number', value: Number(rawNumber) });
                    continue;
                }

                if (/[a-zA-Z_]/.test(ch)) {
                    const start = i;
                    i += 1;
                    while (i < cleaned.length && /[a-zA-Z0-9_]/.test(cleaned[i])) i += 1;
                    const name = cleaned.slice(start, i);
                    tokens.push({ type: 'identifier', value: name });
                    continue;
                }

                if ('+-*/^()'.includes(ch)) {
                    if (ch === '(' || ch === ')') {
                        tokens.push({ type: 'paren', value: ch });
                    } else {
                        tokens.push({ type: 'operator', value: ch });
                    }
                    i += 1;
                    continue;
                }

                throw new Error(`Unsupported character: ${ch}`);
            }

            return tokens;
        }

        function toRpn(expression) {
            const tokens = tokenizeExpression(expression);
            const output = [];
            const stack = [];
            const operators = {
                '+': { precedence: 1, assoc: 'left' },
                '-': { precedence: 1, assoc: 'left' },
                '*': { precedence: 2, assoc: 'left' },
                '/': { precedence: 2, assoc: 'left' },
                '^': { precedence: 3, assoc: 'right' },
                'u-': { precedence: 4, assoc: 'right' }
            };

            let prevType = 'start';
            for (const token of tokens) {
                if (token.type === 'number') {
                    output.push(token);
                    prevType = 'value';
                    continue;
                }

                if (token.type === 'identifier') {
                    const name = token.value.toLowerCase();
                    if (name === 'log2') {
                        stack.push({ type: 'function', value: 'log2' });
                        prevType = 'function';
                        continue;
                    }
                    if (name === 'x') {
                        throw new Error('Variable x is not supported in cal command');
                    }
                    throw new Error(`Unknown identifier: ${token.value}`);
                }

                if (token.type === 'operator') {
                    let op = token.value;
                    if (op === '-' && (prevType === 'start' || prevType === 'operator' || prevType === 'openParen' || prevType === 'function')) {
                        op = 'u-';
                    }

                    while (stack.length) {
                        const top = stack[stack.length - 1];
                        if (top.type !== 'operator') break;
                        const topMeta = operators[top.value];
                        const opMeta = operators[op];
                        const shouldPop = (opMeta.assoc === 'left' && opMeta.precedence <= topMeta.precedence)
                            || (opMeta.assoc === 'right' && opMeta.precedence < topMeta.precedence);
                        if (!shouldPop) break;
                        output.push(stack.pop());
                    }

                    stack.push({ type: 'operator', value: op });
                    prevType = 'operator';
                    continue;
                }

                if (token.type === 'paren' && token.value === '(') {
                    stack.push({ type: 'paren', value: '(' });
                    prevType = 'openParen';
                    continue;
                }

                if (token.type === 'paren' && token.value === ')') {
                    let foundOpen = false;
                    while (stack.length) {
                        const top = stack.pop();
                        if (top.type === 'paren' && top.value === '(') {
                            foundOpen = true;
                            break;
                        }
                        output.push(top);
                    }
                    if (!foundOpen) throw new Error('Mismatched parentheses');
                    if (stack.length && stack[stack.length - 1].type === 'function') {
                        output.push(stack.pop());
                    }
                    prevType = 'value';
                }
            }

            while (stack.length) {
                const top = stack.pop();
                if (top.type === 'paren') throw new Error('Mismatched parentheses');
                output.push(top);
            }

            return output;
        }

        function evaluateRpn(rpn) {
            const stack = [];

            for (const token of rpn) {
                if (token.type === 'number') {
                    stack.push(token.value);
                    continue;
                }

                if (token.type === 'function') {
                    if (stack.length < 1) throw new Error('Invalid function usage');
                    const val = stack.pop();
                    if (token.value === 'log2') {
                        if (val <= 0) throw new Error('Domain error: log2(x) requires x > 0');
                        stack.push(Math.log2(val));
                        continue;
                    }
                    throw new Error(`Unsupported function: ${token.value}`);
                }

                if (token.type === 'operator') {
                    if (token.value === 'u-') {
                        if (stack.length < 1) throw new Error('Invalid unary operator usage');
                        stack.push(-stack.pop());
                        continue;
                    }

                    if (stack.length < 2) throw new Error('Invalid expression');
                    const b = stack.pop();
                    const a = stack.pop();
                    let result;

                    if (token.value === '+') result = a + b;
                    else if (token.value === '-') result = a - b;
                    else if (token.value === '*') result = a * b;
                    else if (token.value === '/') {
                        if (b === 0) throw new Error('Math error: division by zero');
                        result = a / b;
                    } else if (token.value === '^') {
                        result = Math.pow(a, b);
                    } else {
                        throw new Error(`Unsupported operator: ${token.value}`);
                    }

                    if (!Number.isFinite(result) || Number.isNaN(result)) {
                        throw new Error('Math error: invalid numeric result');
                    }
                    stack.push(result);
                }
            }

            if (stack.length !== 1) throw new Error('Invalid expression');
            return stack[0];
        }

        function weatherCodeToText(code) {
            if (code === 0) return 'Clear';
            if (code >= 1 && code <= 3) return 'Cloudy';
            if (code >= 45 && code <= 48) return 'Fog';
            if (code >= 51 && code <= 67) return 'Drizzle/Rain';
            if (code >= 71 && code <= 77) return 'Snow';
            if (code >= 80 && code <= 82) return 'Rain showers';
            if (code >= 95 && code <= 99) return 'Thunderstorm';
            return `Code ${code}`;
        }

        async function fetchBeijingWeather() {
            const lat = 39.9042;
            const lon = 116.4074;
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FShanghai`;
            const res = await fetch(apiUrl, { cache: 'no-store' });
            if (!res.ok) {
                throw new Error(`weather request failed (${res.status})`);
            }
            const data = await res.json();
            const currentTemp = Math.round(data.current.temperature_2m);
            const weatherText = weatherCodeToText(data.current.weather_code);
            const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
            const minTemp = Math.round(data.daily.temperature_2m_min[0]);
            return `Beijing: ${currentTemp}°C, ${weatherText}, H:${maxTemp}°C L:${minTemp}°C`;
        }

        function normalizePingTarget(raw) {
            const input = raw.trim();
            if (!input) throw new Error('ping command requires a url');

            let withProtocol = input;
            if (!/^https?:\/\//i.test(withProtocol)) {
                withProtocol = `https://${withProtocol}`;
            }

            let parsed;
            try {
                parsed = new URL(withProtocol);
            } catch (_e) {
                throw new Error('invalid url');
            }

            if (!parsed.hostname) throw new Error('invalid url');
            return parsed.toString();
        }

        async function pingUrl(rawUrl) {
            const target = normalizePingTarget(rawUrl);
            const start = performance.now();
            try {
                await fetch(target, { mode: 'no-cors', cache: 'no-store' });
            } catch (_e) {
                throw new Error('request failed (possibly blocked by browser/CORS)');
            }
            const elapsed = Math.round(performance.now() - start);
            return `${target} -> ${elapsed} ms`;
        }

        function getEngineKeyByName(rawEngine) {
            const normalized = (rawEngine || '').trim().toLowerCase();
            if (!normalized) return '';
            const matched = Object.keys(engines).find((key) => key.toLowerCase() === normalized);
            return matched || '';
        }

        function normalizeOpenTarget(rawTarget) {
            const input = (rawTarget || '').trim();
            if (!input) throw new Error('open command requires a target');

            if (OPEN_TARGET_ALIASES[input.toLowerCase()]) {
                return OPEN_TARGET_ALIASES[input.toLowerCase()];
            }

            const engineKey = getEngineKeyByName(input);
            if (engineKey) {
                return engines[engineKey].url;
            }

            let target = input;
            if (!/^https?:\/\//i.test(target)) {
                target = `https://${target}`;
            }

            try {
                const parsed = new URL(target);
                if (!parsed.hostname) throw new Error('invalid url');
                return parsed.toString();
            } catch (_e) {
                throw new Error('invalid open target');
            }
        }

        async function runSearchCommand(args) {
            const firstSpace = args.indexOf(' ');
            if (firstSpace === -1) {
                throw new Error('search command usage: search <engine> <query>');
            }

            const rawEngine = args.slice(0, firstSpace).trim();
            const query = args.slice(firstSpace + 1).trim();
            if (!query) throw new Error('search query cannot be empty');

            const engineKey = getEngineKeyByName(rawEngine);
            if (!engineKey) throw new Error(`unknown engine "${rawEngine}"`);

            const engine = engines[engineKey];
            if (engineKey.toLowerCase() === 'gemini') {
                try {
                    await navigator.clipboard.writeText(query);
                    appendTerminalLine('help', 'Query copied to clipboard. Paste in Gemini.');
                } catch (_e) {
                    appendTerminalLine('help', 'Could not access clipboard. Opening Gemini directly.');
                }
                window.open(engine.url, '_blank');
                appendTerminalLine('result', `Opened ${engineKey} for: ${query}`);
                return;
            }

            const searchUrl = new URL(engine.url);
            if (!engine.param) throw new Error(`${engineKey} does not support query search`);
            searchUrl.searchParams.set(engine.param, query);
            window.open(searchUrl.toString(), '_blank');
            appendTerminalLine('result', `Opened ${engineKey} search for: ${query}`);
        }
                function applyTheme(themeName, save = true) {
            const key = (themeName || '').trim().toLowerCase();
            const preset = THEME_PRESETS[key];
            if (!preset) {
                throw new Error(`unknown theme "${themeName}"`);
            }

            Object.entries(preset.vars).forEach(([varName, value]) => {
                document.documentElement.style.setProperty(varName, value);
            });

            activeTheme = key;
            if (save) {
                localStorage.setItem(THEME_STORAGE_KEY, key);
            }
            return key;
        }

        function loadSavedTheme() {
            const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
            if (!savedTheme) return;
            if (!THEME_PRESETS[savedTheme]) return;
            applyTheme(savedTheme, false);
        }

        function runThemeCommand(args) {
            const input = (args || '').trim().toLowerCase();
            const names = Object.keys(THEME_PRESETS);

            if (!input || input === 'list') {
                appendTerminalLine('help', `Themes: ${names.join(', ')}`);
                appendTerminalLine('help', `Current theme: ${activeTheme}`);
                return;
            }

            if (input === 'reset') {
                const applied = applyTheme('stars');
                appendTerminalLine('result', `Theme switched to ${applied}`);
                return;
            }

            const applied = applyTheme(input);
            appendTerminalLine('result', `Theme switched to ${applied}`);
        }

        function formatTimeForZone(zone) {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: zone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            return formatter.format(new Date());
        }

        function resolveTimeZone(input) {
            const normalized = (input || '').trim().toLowerCase();
            if (!normalized || normalized === 'local') {
                const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
                return { label: 'local', zone: localZone };
            }

            if (normalized === 'list' || normalized === 'zones') {
                return { listOnly: true };
            }

            if (TIMEZONE_ALIASES[normalized] && TIMEZONE_ALIASES[normalized] !== 'local') {
                return { label: normalized, zone: TIMEZONE_ALIASES[normalized] };
            }

            return { label: input.trim(), zone: input.trim() };
        }

        function runTimeCommand(args) {
            const resolved = resolveTimeZone(args);
            if (resolved.listOnly) {
                appendTerminalLine('help', `Time aliases: ${Object.keys(TIMEZONE_ALIASES).join(', ')}`);
                return;
            }

            try {
                const output = formatTimeForZone(resolved.zone);
                appendTerminalLine('result', `${resolved.label} (${resolved.zone}): ${output}`);
            } catch (_e) {
                throw new Error('invalid timezone. Use "time list" to view aliases');
            }
        }

        function resetCompletionState() {
            completionState.base = '';
            completionState.items = [];
            completionState.index = -1;
        }

        function setTerminalInputValue(value) {
            terminalInput.value = value;
            terminalInput.setSelectionRange(value.length, value.length);
        }

                        function getAutocompleteCandidates(inputText) {
            const rawInput = inputText || '';
            const hasTrailingSpace = /\s$/.test(rawInput);
            const parts = rawInput.trim().split(/\s+/).filter(Boolean);

            if (!parts.length) {
                return TERMINAL_COMMANDS.slice();
            }

            if (parts.length === 1 && !hasTrailingSpace) {
                const prefix = parts[0].toLowerCase();
                return TERMINAL_COMMANDS.filter((cmd) => cmd.startsWith(prefix));
            }

            const command = parts[0].toLowerCase();

            if (command === 'open') {
                if (parts.length > 2 || (parts.length === 2 && hasTrailingSpace)) {
                    return [];
                }

                const token = hasTrailingSpace ? '' : parts[1] || '';
                const candidates = [...Object.keys(OPEN_TARGET_ALIASES), ...Object.keys(engines)];
                const uniqueCandidates = [...new Set(candidates)];
                return uniqueCandidates
                    .filter((item) => item.toLowerCase().startsWith(token.toLowerCase()))
                    .map((item) => `open ${item}`);
            }

            if (command === 'search') {
                if (parts.length === 1) {
                    return Object.keys(engines).map((engineKey) => `search ${engineKey}`);
                }

                if (parts.length === 2 && !hasTrailingSpace) {
                    const token = parts[1] || '';
                    return Object.keys(engines)
                        .filter((engineKey) => engineKey.toLowerCase().startsWith(token.toLowerCase()))
                        .map((engineKey) => `search ${engineKey}`);
                }
                return [];
            }

            if (command === 'theme') {
                const candidates = [...Object.keys(THEME_PRESETS), 'list', 'reset'];
                if (parts.length === 1 && hasTrailingSpace) {
                    return candidates.map((item) => `theme ${item}`);
                }
                if (parts.length === 2 && !hasTrailingSpace) {
                    const token = parts[1] || '';
                    return candidates
                        .filter((item) => item.toLowerCase().startsWith(token.toLowerCase()))
                        .map((item) => `theme ${item}`);
                }
                return [];
            }

            if (command === 'time') {
                const candidates = Object.keys(TIMEZONE_ALIASES);
                if (parts.length === 1 && hasTrailingSpace) {
                    return candidates.map((item) => `time ${item}`);
                }
                if (parts.length === 2 && !hasTrailingSpace) {
                    const token = parts[1] || '';
                    return candidates
                        .filter((item) => item.toLowerCase().startsWith(token.toLowerCase()))
                        .map((item) => `time ${item}`);
                }
                return [];
            }

            return [];
        }

        function handleTabCompletion(reverse = false) {
            const current = terminalInput.value;

            if (!completionState.items.length || completionState.items[completionState.index] !== current) {
                const candidates = getAutocompleteCandidates(current);
                if (!candidates.length) return;

                completionState.base = current;
                completionState.items = candidates;
                completionState.index = reverse ? candidates.length - 1 : 0;
                setTerminalInputValue(completionState.items[completionState.index]);
                return;
            }

            const delta = reverse ? -1 : 1;
            const total = completionState.items.length;
            completionState.index = (completionState.index + delta + total) % total;
            setTerminalInputValue(completionState.items[completionState.index]);
        }
        function showHelp() {
            appendTerminalLine('help', 'Commands');
            appendTerminalLine('help', '  Core');
            appendTerminalLine('help', '    help                Show this help');
            appendTerminalLine('help', '    clear               Clear terminal output');
            appendTerminalLine('help', '  Math');
            appendTerminalLine('help', '    cal <expr>          Calculate expression');
            appendTerminalLine('help', '  Network');
            appendTerminalLine('help', '    weather             Query current Beijing weather');
            appendTerminalLine('help', '    ping <url>          Measure latency');
            appendTerminalLine('help', '  Web');
            appendTerminalLine('help', '    open <alias|url>    Open website in new tab');
            appendTerminalLine('help', '    search <engine> <q> Search via engine');
            appendTerminalLine('help', '  Personalization');
            appendTerminalLine('help', '    theme [name|list]   Switch/list themes');
            appendTerminalLine('help', '    time [zone|alias]   Show current time');
            appendTerminalLine('help', 'Examples');
            appendTerminalLine('help', '  cal (2+3)*4');
            appendTerminalLine('help', '  open yt');
            appendTerminalLine('help', '  search google terminal commands');
            appendTerminalLine('help', '  theme aurora');
            appendTerminalLine('help', '  time tokyo');
        }

        async function executeCommand(rawCommand) {
            const commandLine = rawCommand.trim();
            if (!commandLine) {
                appendTerminalLine('error', 'Error: empty command');
                return;
            }

            appendTerminalLine('input', `${promptText} ${commandLine}`);

            const firstSpace = commandLine.indexOf(' ');
            const command = (firstSpace === -1 ? commandLine : commandLine.slice(0, firstSpace)).toLowerCase();
            const args = firstSpace === -1 ? '' : commandLine.slice(firstSpace + 1).trim();

            try {
                if (command === 'help') {
                    showHelp();
                    return;
                }

                if (command === 'clear') {
                    clearTerminalOutput();
                    return;
                }

                if (command === 'cal') {
                    if (!args) throw new Error('cal command requires an expression');
                    const rpn = toRpn(args);
                    const result = evaluateRpn(rpn);
                    appendTerminalLine('result', formatNumber(result));
                    return;
                }

                if (command === 'weather') {
                    if (args) throw new Error('weather command does not take arguments');
                    appendTerminalLine('help', 'Querying Beijing weather...');
                    const weather = await fetchBeijingWeather();
                    appendTerminalLine('result', weather);
                    return;
                }

                if (command === 'ping') {
                    appendTerminalLine('help', 'Pinging...');
                    const result = await pingUrl(args);
                    appendTerminalLine('result', result);
                    return;
                }

                if (command === 'open') {
                    const target = normalizeOpenTarget(args);
                    window.open(target, '_blank');
                    appendTerminalLine('result', `Opened: ${target}`);
                    return;
                }

                if (command === 'search') {
                    await runSearchCommand(args);
                    return;
                }

                if (command === 'theme') {
                    runThemeCommand(args);
                    return;
                }

                if (command === 'time') {
                    runTimeCommand(args);
                    return;
                }

                appendTerminalLine('error', `Error: unknown command "${command}"`);
            } catch (err) {
                appendTerminalLine('error', `Error: ${err.message}`);
            }
        }

        function handleTerminalSubmit() {
            const value = terminalInput.value;
            if (!value.trim()) {
                executeCommand('');
                return;
            }
            commandHistory.push(value);
            historyIndex = commandHistory.length;
            terminalInput.value = '';
            resetCompletionState();
            executeCommand(value);
        }

        function handleHistoryNavigation(event) {
            if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
            event.preventDefault();
            if (!commandHistory.length) return;

            if (event.key === 'ArrowUp') {
                historyIndex = Math.max(0, historyIndex - 1);
            } else {
                historyIndex = Math.min(commandHistory.length, historyIndex + 1);
            }

            if (historyIndex === commandHistory.length) {
                terminalInput.value = '';
            } else {
                terminalInput.value = commandHistory[historyIndex] || '';
                terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length);
            }
            resetCompletionState();
        }

        terminalInput.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                handleTabCompletion(event.shiftKey);
                return;
            }

            if (event.key === 'Enter') {
                event.preventDefault();
                handleTerminalSubmit();
                return;
            }

            handleHistoryNavigation(event);
        });

        terminalInput.addEventListener('input', () => {
            resetCompletionState();
        });

        loadSavedTheme();

                function initTerminalGreeting() {
            appendTerminalLine('help', ' /\\_/\\');
            appendTerminalLine('help', '( o.o )');
            appendTerminalLine('help', 'Hello, welcome back. Terminal is ready. Type "help" to see available commands.');
            
        }

        initTerminalGreeting();


















