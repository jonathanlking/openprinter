package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/ping", ping)

	http.HandleFunc("/", hello)

	log.Printf("Listening on Port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "pong")
}

func hello(w http.ResponseWriter, r *http.Request) {
	// TODO: Remove `client/dist` as a static file wrapper
	http.ServeFile(w, r, "client/dist/index.html")
}
