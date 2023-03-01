export default function Content({ id, clickEvent }) {
	switch (id) {
		case 1:
			return (
				<>
					<p>Mi amor,</p>
					<p>
						Espero que estés bien, que puedas descansar un poco a
						pesar de volver al trabajo. ¡Ya hace 1 mes que estamos
						casados, qué rápido! 1 mes entero! Por eso me siento
						afortunada de poder enviarte un correo este día, para
						desearte un feliz aniversario de nuestro primer mes de
						matrimonio. Sin embargo, lamento no haber tenido la{' '}
						<strong
							onClick={() => {
								clickEvent(15);
							}}
						>
							oportunidad
						</strong>{' '}
						de enviarte un mensaje antes... Desde mi llegada no he
						vuelto a pisar el suelo. Todo pasa tan rápido ante mis
						ojos. Nos unimos, mano en mano, para celebrar nuestro
						amor, y en un abrir y cerrar de ojos ya estaba al otro
						lado del mundo. Me hubiera gustado poder disfrutar unos
						instantes más de este momento tan preciado para mí.
					</p>
					<p>
						Pero no quiero terminar este mail con una mala nota,
						¡así que te diré{' '}
						<strong
							onClick={() => {
								clickEvent(11);
							}}
						>
							cosas lindas
						</strong>
						! Me estoy acostumbrando bastante bien a este nuevo
						país, la gente es muy amable. Cambia mucho de nuestra
						ciudad, no es desagradable, jaja. En cuanto al trabajo,
						estoy bien, todavía no he cogido el ritmo... Pero
						llegará. Tantas cosas han cambiado desde que me fui,
						todavía no tengo todo bajo control. Me dejo llevar por
						la vida. Espero tu respuesta con mucha impaciencia, ¡no
						veo la hora de leerte! Pienso en tí cada día.
					</p>
					<p>
						Te amo,
						<br />
						Tu esposa de 1 mes (y de siempre),
						<br />
						Monna
					</p>
				</>
			);
		case 2:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						No sabes lo que feliz me puse al ver tu mail en la
						bandeja de entrada esta tarde. No pude leerlo
						tranquilamente hasta la noche a causa de las clases.
						Aunque tuve la tentación constante de encerrarme en
						algún cubículo de la universidad, decidí que era mucho
						más significativo hacerlo en el balcón del cuarto cuando
						llegara. Así que imprimí tu mail y ahora lo he leído
						como si fuera una carta que me envías desde las
						trincheras jajaja. Este es tu lugar favorito{' '}
						<strong
							onClick={() => {
								clickEvent(16);
							}}
						>
							en esta ciudad
						</strong>
						, y en cierto modo sigo sintiendo que te pertenece, por
						eso creo que es mejor así.
					</p>
					<p>
						Primero que nada, feliz aniversario a tí también, mi
						amor de mi vida. Este es solo el primer mes de muchos
						que llenarán nuestra vida de alegría y muchas aventuras.
					</p>
					<p>
						Todo lo que me cuentas me llena de preocupación, espero
						que puedas por fin tomar un respiro (y puedas escribirme
						más jajaja), pero sobre todo me llena de emoción. ¡Qué
						emoción comenzar una nueva etapa de tu vida así!
						Conociéndote, estoy seguro de que muy pronto te
						adaptarás, eres muy buena para eso, adaptarte rápido.
					</p>
					<p>
						De mi lado nada ha cambiado realmente desde que
						comenzaron las clases. Es la misma rutina de siempre,
						realmente todo se siente como una larga cola de espera
						hasta que pueda verte (y hasta los{' '}
						<strong
							onClick={() => {
								clickEvent(6);
							}}
						>
							exámenes
						</strong>{' '}
						jaja). No puedo esperar a pasar el concurso de una vez y
						poder irme contigo.
					</p>
					<p>
						Con todo mi amor,
						<br />
						Paco.
					</p>
				</>
			);
		case 3:
			return (
				<>
					<p>Querido Paco,</p>
					<p>
						¡Qué{' '}
						<strong
							onClick={() => {
								clickEvent(1);
							}}
						>
							alegría
						</strong>{' '}
						leerte! Realmente no es fácil no poder hablar contigo ni
						escribirte. Me gustaría especialmente tomarte en mis
						brazos y no pensar en nada. Perono importa, tenemos la
						suertedeestarjuntosydeserfelices porencimadetodo.
						Tengoconfianza ennosotros, ennuestroamor, no
						tengoningunaduda. ¡Séque{' '}
						<strong
							onClick={() => {
								clickEvent(9);
							}}
						>
							viajará
						</strong>{' '}
						lejos! ¡Sé que va más allá de las fronteras!
					</p>
					<p>
						Te leo y pido disculpas por no haber podido enviarte un
						mensaje antes, me hubiera gustado desearte mucha suerte
						en tus exámenes. ¿Fue la semana pasada no? ¡Seguro que
						lo has clavado! tiendes a estresarte un poco en el
						último momento, pero siempre aciertas en lo que
						emprendes. Todo está bien en el trabajo. Desde el último
						correo que te envié me he puesto al día un poco. Yo que
						pensaba que tendría la oportunidad de hablar contigo más
						a menudo trabajando en una empresa a la vanguardia de la
						tecnología ¡Para nada! la conexión a internet se corta
						todo el tiempo...
					</p>
					<p>
						Con muchas ganas de leerte mi amor
						<br />
						Monna
					</p>
				</>
			);
		case 4:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						Espero que estés muy bien y que sigas descubriendo el
						lugar en el que aterrizaste. Sí tuve unos exámenes la
						semana pasada, nada importante así que no te preocupes
						mucho. La rutina sigue como siempre. Además con todo lo
						que estudio{' '}
						<strong
							onClick={() => {
								clickEvent(6);
							}}
						>
							más vale que salga bien
						</strong>
						...
					</p>
					<p>
						¡Qué mal lo de tu internet! Ojalá lo arreglen pronto
						para que puedas enviarme mensajes todos los días
						jjajaja. ¡Pero cuéntame más! ¿Cómo es tu oficina?
						¿Adónde comes después del trabajo? ¿Ya tienes amigos?
						Jajaja me siento cómo si fuera tu mamá.
					</p>
					<p>
						Hablando de ella, pasé a verla hace dos días. Fue muy
						rápido porque en medio de los exámenes no tenía mucho
						tiempo para platicar. Pero me dijo que te extraña y que
						te envía muchos abrazos. Dice que no le entiende nada a
						las computadoras así que ni se atreve a intentar abrirse
						un mail pero tal vez me pase un mensaje para que te
						envíe por aquí.
					</p>
					<p>
						Yo también no puedo esperar el día en que podamos{' '}
						<strong
							onClick={() => {
								clickEvent(10);
							}}
						>
							abrazarnos
						</strong>{' '}
						y dormir el uno sobre el otro una tarde entera como
						antes, pero como dices nuestro amor ya me llena el
						corazón mucho aunque estemos lejos.
					</p>
					<p>
						Besotes,
						<br />
						Paco.
					</p>
				</>
			);
		case 5:
			return (
				<>
					<p>Hola mi amor,</p>
					<p>
						Lamento mucho no poder responderte rápido, porque muchas
						veces me respondes muy rápido mientras que yo siempre me
						demoro mucho en ponerme frente a mi buzón de mail... Sin
						embargo pienso en ti todo el tiempo. Es cierto que por
						la forma en que hablo de mi trabajo parece que soy un
						espía y es confidencial, pero en absoluto. Realmente
						quiero hablar contigo porque me siento bien aquí. Me
						hice un amigo que está en el mismo departamento de
						diseño que yo. Su nombre es{' '}
						<strong
							onClick={() => {
								clickEvent(19);
							}}
						>
							Itaca
						</strong>{' '}
						y él también llegó a la empresa casi al mismo tiempo que
						yo, así que nos orientamos juntos. El descanso para
						almorzar es muy agradable porque hay una especie de
						terraza en la azotea de la empresa y vamos muchas veces
						con mi amigo y algunos compañeros. Cuando vamos con
						otras personas de mayor rango preferimos ir al
						restaurante pero bueno digamos que por ahora no puedo
						permitirme hacer eso todos los días. Por otro lado, la
						comida aquí es deliciosa. Te lo contaré la próxima vez
						porque te escribo este correo con prisa.
					</p>
					<p>
						Muchas gracias por cuidarte de ir a ver a mi madre es
						muy amable de tu parte eres un amor. No me extraña que
						no sepa usar computadora jaja pero agradezco que quiera{' '}
						<strong
							onClick={() => {
								clickEvent(13);
							}}
						>
							contactarme
						</strong>
						. Le dirás que le mando un beso muy fuerte. También te
						beso mucho y te extraño mucho. buena suerte para tus
						próximos exámenes aunque se me olvidó de nuevo cuando
						son... ¡Lo siento!
					</p>
					<p>
						With love
						<br />
						Monna
					</p>
				</>
			);
		case 6:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						La semana pasada tuve otra tanda de exámenes que me
						impidieron responderte. Y tú culpabilizando por no
						responderme rápido ¡Si yo estoy igual! En serio no te
						preocupes mi amor. Es un poco triste que los dos estemos
						tan ocupados y que no podamos hablar todos los días,
						pero por el momento no podemos hacer nada más que seguir
						adelante. Estoy muy contento que te haya hecho un amigo
						y que lo estés llevando bien, a veces tenía pesadillas
						dónde te veía comiendo sola un sándwich de atún frío y
						se me caía el corazón al suelo, pero ahora estoy un poco
						más tranquilo sabiendo que tienes buena compañía.
					</p>
					<p>
						Tengo algo que contarte, Monna. Ayer estaba trabajando
						con el grupo de siempre, ya sabes, Javo y los demás, y
						de pronto empecé a sentirme muy mal, no sabría como
						explicarlo, me dieron náuseas y me sentía pesado y,
						bueno, colapsé. No ha sido nada grave y ya he visto un
						médico, creo que solo es el estrés. También comí algo y
						me tomé un refresco que me dieron los colegas. Es raro
						porque en tantos años dentro de la investigación nunca
						me había pasado esto, y fíjate que he tenido épocas con
						más estrés (no quiero ni pensar en el trabajo sobre
						teatro del año pasado ¿Te acuerdas?). Creo que
						simplemente para llenar el vacío de no poder vernos
						después del trabajo, como hacíamos antes, me he
						desbordado a mi mismo con trabajo. Lo siento mucho
						Monna, espero que no te sientas mal y te lo digo por si
						acaso, esto no es tu culpa ni mucho menos, es sólo que
						todavía no logro encontrar un nuevo ritmo ni adaptarme a
						este silencio.
					</p>
					<p>
						Vaya, no quiero terminar el mail de esta forma jaja, así
						que déjame contarte que hoy mismo me contactaron de una
						revista para publicar uno de mis{' '}
						<strong
							onClick={() => {
								clickEvent(12);
							}}
						>
							poemas
						</strong>
						. ¡Pronto tu esposo será un escritor publicado! La
						verdad es que eso me levantó mucho los ánimos. Quiero
						que sepas que te amo y que aunque esté pasando por
						tiempos algo duros{' '}
						<strong
							onClick={() => {
								clickEvent(14);
							}}
						>
							tu confianza y tu amor
						</strong>{' '}
						me resguardan.
					</p>
					<p>
						Con todo mi amor,
						<br />
						Paco.
					</p>
				</>
			);
		case 7:
			return (
				<>
					<p>Hola Paco!</p>
					<p>
						¡¡¡¡ Dios mío espero que estes mejor !!!! nunca deberías
						estar tan mal fisica y mentalmente po un trabajo de la
						escuela, no deberia pasar mi{' '}
						<strong
							onClick={() => {
								clickEvent(9);
							}}
						>
							pobrecito
						</strong>
						... no me puedo ni imaginar.... que bueno es eso por lo
						menos tus amigos estaban contigo y no estabas solo. Pero
						debo admitir que lamento mucho no poder estar allí,
						todavía es triste decirme a mí misma que estoy
						aprendiendo esto poco a poco a medida que avanzo y No
						puedo evitar que se me acelere el corazón al leer tu
						correo electrónico... Sabes que, desearía que pudiéramos
						tratar de planear un viaje juntos para que finalmente
						podamos vernos. Creo que además de liberar estrés nos
						podría traer mucha{' '}
						<strong
							onClick={() => {
								clickEvent(19);
							}}
						>
							felicidad
						</strong>
						. Me cuesta mucho saber que estás mal y que yo no puedo
						estar ahí. No sé si te quedan exámenes pronto pero la
						mejor solución sería que vinieras a verme cuando tengas
						una semana de vacaciones porque yo de momento como acabo
						de empezar a trabajar la verdad no tengo tiempo libre.
						aunque estaré en el trabajo durante el día intentaré
						irme un poco antes creo que mis compañeros entenderán...
						Recuerdo bien que pronto hay vacaciones de navidad, creo
						que tenemos que aguantar hasta entonces ¡Qué bonito será
						cuando podamos volver a vernos! Si no, no te preocupes
						por mí que no solo como sandwich fríos de atún, jajaja.
						A veces como sandwich fríos de pollo... Estoy bromeando,
						si ya te dije que aquí se come muy bien, la “tinga” es
						una especialidad y es riquísima... les gusta mucho el
						pollo aquí (para mi deleite). Espero que veas mi correo
						electrónico pronto para que podamos organizar un viaje
						lo suficientemente pronto No puedo esperar a verte.
						Saluda a Javo ya los demás.
					</p>
					<p>
						Te amo
						<br />
						Monna
					</p>
				</>
			);
		case 8:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						Ya me siento mucho mejor, y leer tu correo esta mañana
						me dio mucha paz. Siento que mi correo anterior te haya
						preocupado tanto, la verdad por un momento pensé en no
						decirte lo que había pasado por miedo a que te pusiera
						triste, sé que debe ser difícil recibir noticias así y
						estar tan lejos, debes sentir mucha{' '}
						<strong
							onClick={() => {
								clickEvent(16);
							}}
						>
							impotencia
						</strong>
						. Pero te aseguro que tus mensajes, de una forma u otra,
						me ayudan y me dan tranquilidad.
					</p>
					<p>
						Apenas leí tu correo me sorprendí mucho. Estaría
						encantado de hacer un{' '}
						<strong
							onClick={() => {
								clickEvent(10);
							}}
						>
							viaje
						</strong>{' '}
						juntos, y me encantaría poder verte y poder ver como es
						donde vives. Sé que habíamos dicho que financieramente
						sería complicado vernos pero la verdad me haría muy
						feliz así que prefiero ir más justo de dinero si eso
						significa que podemos pasar Navidad juntos. ¿Te parece
						bien del 18 de diciembre al 6 de enero? Jajaja Bueno,
						entonces también tengo muchas ganas de probar la comida
						en México ¡Qué ganas!
					</p>
					<p>
						Un abrazo,
						<br />
						Paco.
					</p>
				</>
			);
		case 9:
			return (
				<>
					<p>Mi amor, mi amor,</p>
					<p>
						¡Qué alegría saber que te sientes mejor! Espero que aún
						hayas podido descansar porque de lo contrario puede
						volver a pasar si no te tomas el tiempo para encontrar
						un poco de tranquilidad... Sé que te gusta mucho
						escribir, pero a veces también hay que pensar en salir y
						recargar las pilas. Cuando vengas aquí veremos los
						parques más bonitos del país, te lo prometo.
					</p>
					<p>
						Hablando de eso del 18 de diciembre al 6 de enero sería
						perfecto para mi. No puedo esperar la hora de que nos
						veamos, reconozco que me siento un poco sola aquí.
						Aunque hay muchos colegas con los que pude simpatizar,
						no es lo mismo cuando llego a casa. Puedo sentir que hay
						un{' '}
						<strong
							onClick={() => {
								clickEvent(7);
							}}
						>
							vacío
						</strong>
						. Pero ahora que tenemos una fecha me aguanto y me digo
						que día tras día estaremos más cerca de volver a vernos
						y abrazarnos.
					</p>
					<p>
						Afortunadamente no vivo en la capital porque es muy
						ruidosa, ese lugar no es realmente para mí. Dime cuándo
						puedas tomar tus boletos de avión. Puedes tomarlos en
						cualquier momento te podría pasar a buscar si lo hablo
						un poco con mis compañeros ellos me cubrirán si tengo
						que salir temprano.
					</p>
					<p>
						Coge los billetes que más te convengan económicamente,
						mi amor, y te recogeré en coche en el aeropuerto.
					</p>
					<p>
						No te imaginas la alegría que tengo, con la sonrisa en
						la cara... Después de tanto tiempo por fin podremos
						vernos, ¡me parece un{' '}
						<strong
							onClick={() => {
								clickEvent(1);
							}}
						>
							sueño
						</strong>
						!
					</p>
					<p>
						Mientras tanto voy a tratar de venir un poco más seguido
						a mi buzón para que nos organicemos bien para el viaje.
					</p>
					<p>
						Te quiero muchiiiiisimo, no olvides que estoy siempre
						aquí.
						<br />
						Mona
					</p>
				</>
			);
		case 10:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						¡He comprado los tickets de avión! ¡Los tengo, no puedo
						creerlo! Son las fechas que dijimos, del 18 de diciembre
						al 6 de enero. El 18 llego a las 6 de la tarde, y el 6
						me voy temprano en la mañana, pero eso ya lo veremos
						allá. ¡Qué felicidad! La verdad no parecía real hasta
						que realmente fuí a comprar los tickets.{' '}
						<strong
							onClick={() => {
								clickEvent(6);
							}}
						>
							Mis compañeros
						</strong>{' '}
						tampoco se lo creían, hubieras visto su rostro cuando
						les dije que ya lo había comprado. Ahora tengo que
						comprarles regalos jajaja. Me dirás luego como está{' '}
						<strong
							onClick={() => {
								clickEvent(18);
							}}
						>
							el clima
						</strong>{' '}
						allá para saber que tipo de ropa llevar.
					</p>
					<p>
						Me he puesto a adelantar trabajo para no tener que
						trabajar durante las vacaciones, es algo pesado pero la
						verdad solo pensar que nos veremos pronto me da mucha
						energía. No puedo esperar para sentirte entre mis
						brazos. Te amo Monna, no sabes lo feliz que estoy.
					</p>
					<p>
						Con mucho cariño,
						<br />
						Paco.
					</p>
				</>
			);
		case 11:
			return (
				<>
					<p>
						Mi vida, mi{' '}
						<strong
							onClick={() => {
								clickEvent(17);
							}}
						>
							amor
						</strong>
						,
					</p>
					<p>
						Cuando te fuiste no pude resistir saltar a un cibercafé
						para poder escribirte este correo. Para que lo recibas
						cuando llegaras. Quería que supieras que estoy pensando
						en ti, también quería saber si habías llegado y si todo
						salió bien. Estas últimas dos semanas contigo fueron tan
						hermosas, realmente me hizo mucho bien verte. Pasó tan
						rápido que no puedo creer que ya estés en el avión
						mientras te escribo...
					</p>
					<p>
						Soy la única cliente en el cibercafé, apenas son las 7
						a. m. y estaba en la puerta esperando que abrieran. Me
						deben haber tomado por una loca jaja. Pero es que no es
						posible de otro modo, tenía muchas ganas de decirte lo
						que había en{' '}
						<strong
							onClick={() => {
								clickEvent(5);
							}}
						>
							mi corazón
						</strong>
						. Quería decirte que realmente la pasé de lo mejor
						contigo aquí siento que descubrí el país mucho más en
						dos semanas que en 4 meses desde que llegué. Verás,
						hicimos muchas cosas pero los momentos que más aprecié
						fueron los momentos en que los dos no hacíamos nada o
						escuchaba tu respiración o nos mirabamos, quería
						disfrutar cada segundo que podía ver tus ojos...
					</p>
					<p>En fin, estoy cansada, pero llena de alegría y amor.</p>
					<p>
						Te beso mucho, con todo mi corazón.
						<br />
						Monna
					</p>
				</>
			);
		case 12:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						He llegado bien pero muy tarde en la noche, por lo que
						no he podido responderte inmediatamente, lo siento.
					</p>
					<p>
						Para mi también han sido unos días increíbles parecen
						casi un sueño cuando me pongo a recordar todo lo que
						hicimos. Un sueño tan irreal en un país tan irreal como
						lo es México, pero la yema de mis dedos aún recuerda
						cómo se siente tu piel, sé que fue real, sé que sí
						estuvimos ahí y que nuestro amor es real. Al mirar por
						la ventana adyacente al asiento que me tocó, escribí un
						poema que te voy a dejar al final de este mail. Después
						de escribirlo comprendí que no soportaría una vez más
						separarme de tí así, como si solo fuera un sueño.
						Escuchame, Monna, no quiero meternos presión pero creo
						que{' '}
						<strong
							onClick={() => {
								clickEvent(14);
							}}
						>
							algo tiene que cambiar
						</strong>
						.
					</p>
					<p>
						Sentado en este baño de luz espesa, me pregunto por qué
						mecanismos se configuran y toman lugar las cosas. ¿qué
						dolor lleva al pájaro a cantar su dulce canto? ¿Qué
						palabra lleva al sol a mostrar las cosas como son y qué
						silencio las oculta entre sombras trémulas? Por el
						costado tengo la respuesta a todo y se me escapa como
						siempre. siempre es el tiempo en que se conjugan mis
						añoranzas y mi{' '}
						<strong
							onClick={() => {
								clickEvent(4);
							}}
						>
							desdicha
						</strong>
						, fugitivo para siempre es el tiempo deseado que un Dios
						en las alturas con amor y furia desprende de nuestros
						pechos y me averguenzo de haberla olvidado de no haberla
						besado con unos labios que dicen siempre.
					</p>
					<p>
						Con todo mi amor,
						<br />
						Paco.
					</p>
				</>
			);
		case 13:
			return (
				<>
					<p>Hola Paco,</p>
					<p>
						Lamento haberte dejado sin contestar otra vez. Se que te
						pido perdón todo el tiempo, pero había algunos problemas
						en la agencia y tenía que trabajar horas extras. Pero
						hoy estoy leyendo tu mensaje porque no veo la hora de
						ver tu respuesta, porque me moría de ganas de decirte
						que tu poema es muy bonito. Lo imprimí y lo pegué en la
						pared de mi cuarto. Así tengo un pedacito de ti aunque
						estés lejos. Entiendo lo que quieres decir en tu correo
						electrónico. Sé que no es fácil no vernos todos los días
						y me duele el corazón tanto como te duele a ti. pero por
						favor no me culpes si me fui es porque en el fondo
						necesitaba irme. si nos casamos antes de que yo me
						fuera, es precisamente para que ambos sepamos que
						mantenemos este vínculo, aunque estemos lejos el uno del
						otro. Lamento que lo tomes así, lamento que te haya
						dolido tanto, pero por ahora creo que me tengo que
						quedar en México.
					</p>
					<p>
						Espero que tengamos la{' '}
						<strong
							onClick={() => {
								clickEvent(3);
							}}
						>
							oportunidad
						</strong>{' '}
						de retomar esta discusión y profundizar nuestros
						sentimientos al respecto porque me parece un tema muy
						importante y delicado al mismo tiempo, pero por el
						momento reconozco que con los problemas en el trabajo y
						lo que me acabas de decir, no tengo muchas ganas. Me voy
						a{' '}
						<strong
							onClick={() => {
								clickEvent(17);
							}}
						>
							descansar
						</strong>
						.
					</p>
					<p>
						Te beso mucho y espero tu proximo mail,
						<br />
						Tu Monna
					</p>
				</>
			);
		case 14:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						Espero que te sea leve todo el trabajo y siento mucho si
						lo que digo en estos mails no te sube mucho la moral.
						Quiero que sepas que aunque hoy me duele mucho{' '}
						<strong
							onClick={() => {
								clickEvent(12);
							}}
						>
							no tenerte cerca
						</strong>
						, y que a veces simplemente no entiendo porque no
						estamos juntos, porque no estás tú aquí o yo allá, jamás
						diré que tienes toda la culpa, ni que deberías haberte
						quedado y no hacer lo que querías. Si tú quieres estar
						en{' '}
						<strong
							onClick={() => {
								clickEvent(8);
							}}
						>
							México
						</strong>{' '}
						entonces así debe de ser, es por eso que te amo, mi
						Monna.
					</p>
					<p>
						Pero tampoco puedo mentirte, en este momento mi corazón
						hierve en muchas dudas. No sé porqué estoy aquí, no sé
						porqué tuviste que irte tan rápido, porque no pudimos
						irnos juntos un poco más adelante. No sé siquiera si
						deberías responder a estas preguntas, no quiero acusarte
						de nada como dije antes, solo quiero que me digas algo,
						es mejor así, escríbeme cuando puedas, dime cómo ha
						estado tu día.
					</p>
					<p>
						Todo mi amor,
						<br />
						Paco.
					</p>
				</>
			);
		case 15:
			return (
				<>
					<p>Paco,</p>
					<p>
						El trabajo está un poco más tranquilo estos días. Creo
						que esta semana tendré más tiempo para hablar contigo.
						Reconozco que no estoy en un muy buen momento de mi vida
						personal. Hace mucho tiempo que quería ir a algún lugar
						a vivir aventuras para intentar encontrarme. Sentí que
						si aún me quedaba en nuestro país natal no iba a lograr
						desarrollarme... si me fui tan rápido no fue porque no
						quisiera quedarme contigo fue porque sentí que estaba
						atrapado dentro de mí mismo y necesitaba salir para
						encontrar{' '}
						<strong
							onClick={() => {
								clickEvent(5);
							}}
						>
							respuestas
						</strong>
						.
					</p>
					<p>
						Claro que tiene lados buenos y malos, pero creo en
						nuestro amor y creo que puede resistir un poco más... Lo
						siento mucho si piensas que soy egoísta, te entenderé
						perfectamente si lo piensas. También se que no estoy
						sola en la pareja y que los dos necesitamos
						tranquilizarnos, pero hay cosas que tu no puedes hacer
						por mi y que solo yo tengo que encontrar. Una vez más
						solo quería decirles que a pesar de los esfuerzos que
						hice durante años creo que este viaje fue necesariamente
						beneficioso para mí porque no tenía ganas de volver a
						arrastrar los pies en esta misma ciudad que me hizo
						vivir muchas cosas malas...
					</p>
					<p>
						Es una tontería pero estar en el extranjero me permite
						tener otra perspectiva de la vida, otra perspectiva de
						mí.
					</p>
					<p>Me gustaría saber que piensas al respecto.</p>
					<p>
						Me gustaría saber si lo estás viviendo tan mal que
						deberíamos hablar y me dices si te gustaría intentar
						cambiar algo, si tienes un plan en mente o si realmente
						necesito que me vaya a casa.
					</p>
					<p>
						Te amo con todo mi corazón. Esta noche estaré mirando
						las estrellas pensando en ti, se que tu tambien estaras
						pensando en mi. Voy a intentar no tener{' '}
						<strong
							onClick={() => {
								clickEvent(7);
							}}
						>
							miedo
						</strong>
						.
					</p>
					<p>Monna</p>
				</>
			);
		case 16:
			return (
				<>
					<p>Querida Monna,</p>
					<p>
						Creo que entiendo lo que estás viviendo. Yo mismo te he
						visto ahogarte{' '}
						<strong
							onClick={() => {
								clickEvent(2);
							}}
						>
							en esta ciudad
						</strong>{' '}
						que te vió nacer. Ayer mientras salía de la tienda ví un
						señor afuera de un bar y después de unos segundos logré
						reconocer su rostro. Era Matías, por mucho tiempo fuimos
						vecinos y a principios de los 80s jugábamos juntos en
						las maquinitas, pero me daba miedo ganarle porque decían
						que golpeaba a los demás cuando se enojaba. Ahí estaba
						Matías, y parecía igual de malo que en mi niñez. Miraba
						para acá pero no sé si me reconoció. Ví su rostro y me
						acordé que algunos amigos decían que un día le sacó unos
						dientes una vez que lo abofeteó en plena calle. Saludó a
						un señor que salía del bar y ahí estaban, relucientes
						dientes plateados que probaban la leyenda. Maldita sea,
						Matías. Como me hubiera gustado atreverme a ganarte en
						el street fighter. Me pregunto cuánto tiempo lleva
						Matías viviendo del otro lado de la calle y cuánto
						tiempo llevo yo aquí.{' '}
						<strong
							onClick={() => {
								clickEvent(4);
							}}
						>
							Cuántas cosas han cambiado
						</strong>{' '}
						y cuánto sigue siendo exactamente igual.
					</p>
					<p>
						En fin, creo que estoy divagando mucho jajaja. Monna, no
						te preocupes, encontraremos una solución, creo que
						necesito pensarlo un poco más, pero sé que tanto Matías
						como yo debemos atrevernos{' '}
						<strong
							onClick={() => {
								clickEvent(18);
							}}
						>
							a hacer un cambio
						</strong>
						.
					</p>
					<p>
						Mucho amor,
						<br />
						Paco.
					</p>
				</>
			);
		case 17:
			return (
				<>
					<p>Hola cariño,</p>
					<p>
						No esperaba recibir una historia completa sobre un
						random amigo de la infancia, pero no me sorprende de ti.
						Eres{' '}
						<strong
							onClick={() => {
								clickEvent(13);
							}}
						>
							poeta
						</strong>
						, ves algo sorprendente donde la gente pasa sin mirar.
						Pero lo que me dijiste me hizo poner las cosas en
						perspectiva.
					</p>
					<p>
						Ya estoy feliz de no haber visto a Matias porque creo
						que fui yo quien le hubiera dado una paliza, ¡que nadie
						asuste a mi Paquito! Jaja. Estoy bromeando, no soy
						violenta.
					</p>
					<p>
						Al final pienso que no hice una mala elección. Pero
						también pienso que no debo perder de vista lo que es más
						querido para mi corazón: tú. Encontraremos el tiempo
						para encontrar una solución a este problema que tenemos
						y no se preocupe si todos está listo para dar un paso
						adelante y lograremos unir nuestras ideas sin tener que
						comprometernos. Para mí es muy importante que logremos
						comunicarnos y decir las cosas para que no se convierta
						en un sentimiento reprimido. Te amo, y espero que todo
						esté bien de su lado, que la{' '}
						<strong
							onClick={() => {
								clickEvent(3);
							}}
						>
							escuela
						</strong>{' '}
						vaya bien y que pronto podamos vernos.
					</p>
					<p>
						Entonces tal vez sería bueno que vengas conmigo, pero
						una vez más no quiero imponerte nada, depende de ti ver
						qué quieres hacer después de tu último año de estudio.
					</p>
					<p>With so much love, Monna</p>
				</>
			);
		case 18:
			return (
				<>
					<p>Monna,</p>
					<p>
						¿Cómo te encuentras mi corazón? Espero que te esté
						siendo leve el trabajo y que no tengas muchos problemas.
						A veces en la noche puedo casi verte en el buró y llena
						de preocupaciones. Seguro estás así ahora jaja. Recuerda
						descansar un poco, mi amor.
					</p>
					<p>
						Han empezado las lluvias aquí, el cielo está siempre
						gris. Y con el gris del hormigón y del asfalto, se
						vuelve aplastante. De hecho, ayer fuí con unos amigos al
						centro y cruzamos por el pequeño parque al que solíamos
						ir tú y yo. Es un sentimiento extraño que me surge
						cuando veo un lugar por el que nuestras vidas se
						detuvieron. Primero siento un gran cariño, como si fuera
						tierra santa en medio de basureros y baldíos. Pero luego
						me duele un poco, porque lo único que le daba su color a
						ese banco eras tú y ahora tú ya no estás. Solo es un
						banco. Así la ciudad es todavía más fea (si ya de por si
						estaba fea jajaja qué has hecho Monna).
					</p>
					<p>
						Me pregunto cuanto más deberíamos esperar. En realidad
						este lugar solo es un puerto, un apoyo en el que nos
						tocó nacer aquí que nunca ha sido nuestro hogar. No es
						mi hogar. Creo que ahora comprendo, yo también necesito
						buscar respuestas. No debería ver mi estancia en esta
						ciudad como un{' '}
						<strong
							onClick={() => {
								clickEvent(14);
							}}
						>
							martirio
						</strong>{' '}
						pero como un camino{' '}
						<strong
							onClick={() => {
								clickEvent(20);
							}}
						>
							hacia tí
						</strong>{' '}
						y hacía mi.
					</p>
					<p>
						Cuando estuve contigo en México pensé que lo que me
						hacía feliz era no estar solo, poder escucharte las
						mañanas reír y no levantarme solo frente al{' '}
						<strong
							onClick={() => {
								clickEvent(2);
							}}
						>
							balcón
						</strong>{' '}
						gris. Pero en realidad no era eso, estaba siendo feliz
						porque tú me sacas de mi zona de confort, siempre lo has
						hecho, y lo sigues haciendo. Monna, quiero ir a vivir
						contigo.
					</p>
					<p>
						Con amor,
						<br />
						Paco
					</p>
				</>
			);
		case 19:
			return (
				<>
					<p>Mi ángel, </p>
					<p>
						Acabo de pedirme allí en el cibercafé para ver tu correo
						electrónico. Incluso si te dije que no me quedaba mucho
						trabajo, volvió muy rápido. Debo decirte que incluso si
						este trabajo me agrada, siento que me impide hacer lo
						que me agrada aún más. Siento que me impide hablarte, mi
						amor de mi vida, y yo no quiero eso. Voy a intentar
						tomarme unas pequeñas vacaciones y poder tener tiempo
						para ir a verte. Lo necesito. Ayer estaba mirando las
						estrellas de nuevo... Lloré. Me conmueve mucho la{' '}
						<strong
							onClick={() => {
								clickEvent(15);
							}}
						>
							decisión
						</strong>{' '}
						que me comentaste en tu último correo. Realmente sentí
						que estabas muy feliz cuando llegaste y yo también.
						Quiero encontrar ese sentimiento y vivirlo contigo día a
						día.
					</p>
					<p>Gracias por ser paciente conmigo.</p>
					<p>¡Oh!</p>
					<p>
						¡Tengo una muy buena noticia ! ¿Te acuerdas de mi amigo
						Itaca? Me dijo que gracias al trabajo de su hermana
						tenía acceso a líneas telefónicas internacionales. Es
						increíble, hasta me dijo que podía usarlos sin ningún
						problema porque me dio una tarjeta de acceso. Sé que en
						casa hay teléfono, pero las comunicaciones aquí son muy
						caras... Que suerte que por fin puedo tener acceso a un
						teléfono sin tener que preocuparme por los pagos. Solo
						tienes que darme el número de la casa porque no lo
						recuerdo, ¡y luego puedo llamarte lo más seguido
						posible! No necesitaremos enviarnos tantos correos
						electrónicos que podamos escuchar las voces de los demás
						hasta que nos{' '}
						<strong
							onClick={() => {
								clickEvent(11);
							}}
						>
							volvamos a ver
						</strong>
						... {`<3`}
					</p>
					<p>
						Te amooooooooooooo !!
						<br />
						Monna
					</p>
				</>
			);
	}
}
