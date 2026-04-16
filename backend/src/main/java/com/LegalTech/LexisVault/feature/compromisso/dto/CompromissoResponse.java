package com.LegalTech.LexisVault.feature.compromisso.dto;

import java.time.LocalDateTime;

public class CompromissoResponse {

    private Long id;
    private String titulo;
    private LocalDateTime dataHora;
    private String tipo;
    private String status;

    //Construtor

    public CompromissoResponse(Long id, String titulo, LocalDateTime dataHora, String tipo, String status) {
        this.id = id;
        this.titulo = titulo;
        this.dataHora = dataHora;
        this.tipo = tipo;
        this.status = status;
    }

    // Getters

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public String getTipo() {
        return tipo;
    }

    public String getStatus() {
        return status;
    }

    
}