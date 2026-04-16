package com.LegalTech.LexisVault.feature.compromisso;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Compromisso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;

    private LocalDateTime dataHora;

    private String tipo;   // AUDIENCIA, REUNIAO, PRAZO
    private String status; // PENDENTE, CONCLUIDO

    // Getters e Setters

    public Long getId() { return id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public LocalDateTime getDataHora() { return dataHora; }
    public void setDataHora(LocalDateTime dataHora) { this.dataHora = dataHora; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}