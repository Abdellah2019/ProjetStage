import http.server
import socketserver

port=4000
address=("",port)


handler=http.server.SimpleHTTPRequestHandler
httpd=socketserver.TCPServer(address,handler)


print(f"Serveur démarré sur le port {port}")
httpd.serve_forever()
#Note avec un simple serveur http il telecharge les fichiers mais il n'execute pas les fichiers
#donc on doit faire appel à l'interface cgi pour contourner le probleme(execution des fichiers independant du langage choisi)