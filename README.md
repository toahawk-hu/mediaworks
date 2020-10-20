# mediaworks


Töltsd le a node js-t & NPM (https://nodejs.org/en/download/)
környezeti változó beállítása (NODE_HOME --> c:\Program Files\nodejs\)
munkakönyvtár létrehozása pl. c:\work\cypress, belépni és itt indítani egy cmd-t
npm init
package name --> pl cypresstest (ne cypress maradjon)
jók a többi default adatok --> elkészül a package.json
npm install cypress --save-dev
IDEA telepítése pl. visual studio code
cypress futtatása (cmd prompt rendszergazdaként) .\node_modules\.bin\cypress open a munkakönyvtárból
elindul a testrunner. minden tesztesetet tartalmaz, ami az integration\examples-ben van, itt is megtalálható, de megtalálható minden, amit az npm init csinál


cypress.json-ba 1400x660-as viewport-ot írtam be, mert azt tapasztaltam, hogy teljesen másképp néz ki az oldal más más felbontáson,
gondolom okostelefon, tablet stb. miatt, de még a lokátorok se voltak egészen ugyanazok felbontásonként.
én most 1400x660-ra írtam meg a tesztet, az e-mail-t elküldve saját magamnak azonban nem érkezett új e-mail.
igyekeztem érthetően kommentelni.
