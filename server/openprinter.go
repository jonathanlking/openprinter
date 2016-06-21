package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

const staticDir = "client/dist"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/ping", ping)

	fs := http.FileServer(http.Dir(staticDir))
	http.Handle("/", http.StripPrefix("/", fs))

	log.Printf("Listening on Port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "pong")
}
