package com.LegalTech.LexisVault.feature.compromisso;

import com.LegalTech.LexisVault.feature.compromisso.dto.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompromissoService {

    private final CompromissoRepository repository;

    //Construtor

    public CompromissoService(CompromissoRepository repository) {
        this.repository = repository;
    }

    //Listar

    public List<CompromissoResponse> listar() {
        return repository.findAll()
                .stream()
                .map(c -> new CompromissoResponse(
                        c.getId(),
                        c.getTitulo(),
                        c.getDataHora(),
                        c.getTipo(),
                        c.getStatus()
                ))
                .collect(Collectors.toList());
    }

    //Criar

    public CompromissoResponse criar(CompromissoRequest request) {
        Compromisso c = new Compromisso();

        c.setTitulo(request.getTitulo());
        c.setDescricao(request.getDescricao());
        c.setDataHora(request.getDataHora());
        c.setTipo(request.getTipo());
        c.setStatus(request.getStatus());

        Compromisso salvo = repository.save(c);

        return new CompromissoResponse(
                salvo.getId(),
                salvo.getTitulo(),
                salvo.getDataHora(),
                salvo.getTipo(),
                salvo.getStatus()
        );
    }
}