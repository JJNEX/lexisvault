package com.LegalTech.LexisVault.feature.compromisso;

import com.LegalTech.LexisVault.feature.compromisso.dto.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/compromissos")
public class CompromissoController {

    private final CompromissoService service;

    //Construtor

    public CompromissoController(CompromissoService service) {
        this.service = service;
    }

    //Listar

    @GetMapping
    public List<CompromissoResponse> listar() {
        return service.listar();
    }

    //Criar

    @PostMapping
    public CompromissoResponse criar(@RequestBody CompromissoRequest request) {
        return service.criar(request);
    }
}