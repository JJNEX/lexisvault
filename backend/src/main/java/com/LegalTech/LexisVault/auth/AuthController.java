package com.LegalTech.LexisVault.auth;

import com.LegalTech.LexisVault.auth.dto.LoginRequest;
import com.LegalTech.LexisVault.auth.dto.LoginResponse;
import com.LegalTech.LexisVault.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        // ⚠️ TEMPORÁRIO (apenas para teste)
        if (!request.getEmail().equals("admin@admin.com")
                || !request.getPassword().equals("123456")) {
            return ResponseEntity.status(401).build();
        }

        
        String token = jwtService.generateToken(request.getEmail());

        return ResponseEntity.ok(new LoginResponse(token));
    }

    @GetMapping("/me")
    public ResponseEntity<String> me(Authentication authentication) {
        return ResponseEntity.ok(authentication.getName());
    }

    
}


